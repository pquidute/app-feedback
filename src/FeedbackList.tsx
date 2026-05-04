import { type DocumentHandle, useDocuments } from "@sanity/sdk-react";
import { Stack, Button } from "@sanity/ui";

type FeedbackListProps = {
  selectedFeedback: DocumentHandle | null;
  setSelectedFeedback: (feedback: DocumentHandle | null) => void;
};

export function FeedbackList({
  selectedFeedback,
  setSelectedFeedback,
}: FeedbackListProps) {
  const { data, hasMore, loadMore } = useDocuments({
    documentType: "feedback",
  });

  return (
    <Stack space={2} padding={5}>
      {data?.map((feedback) => (
        <pre key={feedback.documentId}>{JSON.stringify(feedback, null, 2)}</pre>
      ))}
      {hasMore && <Button onClick={loadMore} text="Load more" />}
    </Stack>
  );
}
