import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/guias-bst")({
  beforeLoad: () => {
    throw redirect({ to: "/", statusCode: 301 });
  },
});
