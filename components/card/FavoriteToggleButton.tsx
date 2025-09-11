import { SignInCardButton } from "../Form/SubmitButtons"
import FavoriteToggleForm from "./FavoriteToggleForm"
import { auth } from "@clerk/nextjs/server"

const FavoriteToggleButton = async ({
  landmarkId,
  favoriteID,
}: {
  landmarkId: string
  favoriteID: string | null
}) => {
  const { userId } = await auth()
  if (!userId) return <SignInCardButton />

  return (
    <FavoriteToggleForm
      favoriteID={favoriteID}
      landmarkId={landmarkId}
    />
  )
}

export default FavoriteToggleButton
