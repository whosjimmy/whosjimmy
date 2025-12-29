// composables/useYouTubeAPI.ts
import { ref } from 'vue'

export interface SubscriptionStatus {
	isSubscribed: boolean
	subscriptionId?: string
}

export interface LikeStatus {
	isLiked: boolean
	rating: 'like' | 'dislike' | 'none'
}

interface YouTubeAPIError extends Error {
	status?: number
}

interface SubscriptionResponse {
	items?: Array<{
		id: string
		snippet: unknown
	}>
}

interface RatingResponse {
	items?: Array<{
		videoId: string
		rating: 'like' | 'dislike' | 'none'
	}>
}

export const useYouTubeAPI = () => {
	const config = useRuntimeConfig()
	const API_KEY = config.public.YOUTUBE_API_KEY
	const BASE_URL = 'https://www.googleapis.com/youtube/v3'

	const loading = ref(false)
	const error = ref<string | null>(null)

	/**
	 * Check if user is subscribed to a channel
	 */
	const checkSubscription = async (
		channelId: string,
		accessToken: string
	): Promise<SubscriptionStatus> => {
		loading.value = true
		error.value = null

		try {
			console.log('Checking subscription for channel:', channelId)
			const response = await fetch(
				`${BASE_URL}/subscriptions?part=snippet&mine=true&forChannelId=${channelId}&key=${API_KEY}`,
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				}
			)

			if (!response.ok) {
				const errorText = await response.text()
				console.error(
					'Subscription check failed:',
					response.status,
					errorText
				)
				throw new Error(`API error: ${response.status}`)
			}

			const data = (await response.json()) as SubscriptionResponse
			console.log('Subscription response:', data)

			return {
				isSubscribed: !!(data.items && data.items.length > 0),
				subscriptionId: data.items?.[0]?.id,
			}
		} catch (err) {
			const apiError = err as YouTubeAPIError
			console.error('Error checking subscription:', apiError)
			error.value = apiError.message
			return { isSubscribed: false }
		} finally {
			loading.value = false
		}
	}

	/**
	 * Subscribe to a channel
	 */
	const subscribeToChannel = async (
		channelId: string,
		accessToken: string
	): Promise<boolean> => {
		loading.value = true
		error.value = null

		try {
			const response = await fetch(
				`${BASE_URL}/subscriptions?part=snippet&key=${API_KEY}`,
				{
					method: 'POST',
					headers: {
						Authorization: `Bearer ${accessToken}`,
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						snippet: {
							resourceId: {
								kind: 'youtube#channel',
								channelId: channelId,
							},
						},
					}),
				}
			)

			if (!response.ok) {
				throw new Error(`Failed to subscribe: ${response.status}`)
			}

			return true
		} catch (err) {
			const apiError = err as YouTubeAPIError
			console.error('Error subscribing:', apiError)
			error.value = apiError.message
			return false
		} finally {
			loading.value = false
		}
	}

	/**
	 * Unsubscribe from a channel
	 */
	const unsubscribeFromChannel = async (
		subscriptionId: string,
		accessToken: string
	): Promise<boolean> => {
		loading.value = true
		error.value = null

		try {
			const response = await fetch(
				`${BASE_URL}/subscriptions?id=${subscriptionId}&key=${API_KEY}`,
				{
					method: 'DELETE',
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				}
			)

			if (!response.ok && response.status !== 204) {
				throw new Error(`Failed to unsubscribe: ${response.status}`)
			}

			return true
		} catch (err) {
			const apiError = err as YouTubeAPIError
			console.error('Error unsubscribing:', apiError)
			error.value = apiError.message
			return false
		} finally {
			loading.value = false
		}
	}

	/**
	 * Check if user has liked a video
	 */
	const checkLikeStatus = async (
		videoId: string,
		accessToken: string
	): Promise<LikeStatus> => {
		loading.value = true
		error.value = null

		try {
			const response = await fetch(
				`${BASE_URL}/videos/getRating?id=${videoId}&key=${API_KEY}`,
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				}
			)

			if (!response.ok) {
				throw new Error(`API error: ${response.status}`)
			}

			const data = (await response.json()) as RatingResponse
			const rating = data.items?.[0]?.rating || 'none'

			return {
				isLiked: rating === 'like',
				rating: rating,
			}
		} catch (err) {
			const apiError = err as YouTubeAPIError
			console.error('Error checking like status:', apiError)
			error.value = apiError.message
			return { isLiked: false, rating: 'none' }
		} finally {
			loading.value = false
		}
	}

	/**
	 * Like a video
	 */
	const likeVideo = async (
		videoId: string,
		accessToken: string
	): Promise<boolean> => {
		loading.value = true
		error.value = null

		try {
			const response = await fetch(
				`${BASE_URL}/videos/rate?id=${videoId}&rating=like&key=${API_KEY}`,
				{
					method: 'POST',
					headers: {
						Authorization: `Bearer ${accessToken}`,
						'Content-Length': '0',
					},
				}
			)

			if (!response.ok && response.status !== 204) {
				throw new Error(`Failed to like video: ${response.status}`)
			}

			return true
		} catch (err) {
			const apiError = err as YouTubeAPIError
			console.error('Error liking video:', apiError)
			error.value = apiError.message
			return false
		} finally {
			loading.value = false
		}
	}

	/**
	 * Unlike a video (set rating to none)
	 */
	const unlikeVideo = async (
		videoId: string,
		accessToken: string
	): Promise<boolean> => {
		loading.value = true
		error.value = null

		try {
			const response = await fetch(
				`${BASE_URL}/videos/rate?id=${videoId}&rating=none&key=${API_KEY}`,
				{
					method: 'POST',
					headers: {
						Authorization: `Bearer ${accessToken}`,
						'Content-Length': '0',
					},
				}
			)

			if (!response.ok && response.status !== 204) {
				throw new Error(`Failed to unlike video: ${response.status}`)
			}

			return true
		} catch (err) {
			const apiError = err as YouTubeAPIError
			console.error('Error unliking video:', apiError)
			error.value = apiError.message
			return false
		} finally {
			loading.value = false
		}
	}

	/**
	 * Batch check like status for multiple videos
	 */
	const batchCheckLikes = async (
		videoIds: string[],
		accessToken: string
	): Promise<Map<string, LikeStatus>> => {
		const results = new Map<string, LikeStatus>()

		// YouTube API allows checking multiple videos at once
		const idsParam = videoIds.join(',')

		try {
			console.log('Checking likes for videos:', videoIds.length)
			const response = await fetch(
				`${BASE_URL}/videos/getRating?id=${idsParam}&key=${API_KEY}`,
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				}
			)

			if (!response.ok) {
				const errorText = await response.text()
				console.error(
					'Batch like check failed:',
					response.status,
					errorText
				)
				throw new Error(`API error: ${response.status}`)
			}

			const data = (await response.json()) as RatingResponse
			console.log('Like ratings response:', data)

			data.items?.forEach((item) => {
				results.set(item.videoId, {
					isLiked: item.rating === 'like',
					rating: item.rating,
				})
			})

			console.log('Processed', results.size, 'like statuses')
		} catch (err) {
			const apiError = err as YouTubeAPIError
			console.error('Error batch checking likes:', apiError)
			error.value = apiError.message
		}

		return results
	}

	return {
		loading,
		error,
		checkSubscription,
		subscribeToChannel,
		unsubscribeFromChannel,
		checkLikeStatus,
		likeVideo,
		unlikeVideo,
		batchCheckLikes,
	}
}
