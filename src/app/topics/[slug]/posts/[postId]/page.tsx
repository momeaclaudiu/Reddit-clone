import Link from "next/link"
import paths from "@/paths"
import PostShow from "@/components/posts/post-show"
import CommentCreateForm from "@/components/comments/comment-create-form"
import CommentList from "@/components/comments/comment-list"
import { Suspense } from "react"
import PostShowLoading from "@/components/posts/post-show-loading"

interface PostShowPageProps {
	params: {
		slug: string
		postId: string
	}
}

const PostShowPage = async ({ params }: PostShowPageProps) => {
	const { slug, postId } = params

	return (
		<div className="space-y-3 px-2">
			<Link
				className="underline decoration-solid ps-4"
				href={paths.topicShow(slug)}
			>
				{`< Back to ${slug}`}
			</Link>
			<Suspense fallback={<PostShowLoading />}>
				<PostShow postId={postId} />
			</Suspense>
			<CommentCreateForm postId={postId} />
			<CommentList postId={postId} />
		</div>
	)
}

export default PostShowPage
