import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <>Hello</>;
});

export const head: DocumentHead = {
  title: "b_discord",
  meta: [
    {
      name: "better",
      content: "site description",
    },
  ],
};
