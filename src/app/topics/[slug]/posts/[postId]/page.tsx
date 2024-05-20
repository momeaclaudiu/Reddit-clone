import Link from "next/link"
import paths from "@/paths"
import PostShow from "@/components/posts/post-show"
import CommentCreateForm from "@/components/comments/comment-create-form"
import CommentList from "@/components/comments/comment-list"

interface PostShowPageProps {
	params: {
		slug: string
		postId: string
	}
}

const PostShowPage = async ({ params }: PostShowPageProps) => {
	const { slug, postId } = params

	return (
		<div className="space-y-3">
			<Link
				className="underline decoration-solid ps-4"
				href={paths.topicShow(slug)}
			>
				{`< Back to ${slug}`}
			</Link>
			<PostShow postId={postId} />
			<CommentCreateForm postId={postId} />
			<CommentList postId={postId} />
		</div>
	)
}

export default PostShowPage
