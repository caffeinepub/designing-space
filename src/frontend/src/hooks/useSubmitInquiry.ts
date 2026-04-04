import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useActor } from "./useActor";

export interface InquiryFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  productInterest: string;
  quantity: string;
  message: string;
}

export function useSubmitInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: InquiryFormData) => {
      if (!actor) throw new Error("Actor not available");
      return actor.submitInquiry(
        data.name,
        data.company,
        data.email,
        data.phone || null,
        data.productInterest,
        data.quantity,
        data.message,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inquiries"] });
    },
  });
}
