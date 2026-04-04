import { useQuery } from "@tanstack/react-query";
import type { Inquiry } from "../backend";
import { useActor } from "./useActor";

export function useInquiries() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<Array<[string, Inquiry]>>({
    queryKey: ["inquiries"],
    queryFn: async () => {
      if (!actor) throw new Error("Actor not available");
      return actor.getAllInquiries(null);
    },
    enabled: !!actor && !actorFetching,
  });
}
