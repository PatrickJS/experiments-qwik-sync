import { component$, $sync } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Hi 👋</h1>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
        <div style={{ height: "2000px" }}>hi</div>
        <button
          onKeyDown$={$sync((e: KeyboardEvent) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
            }
          })}
          style={{
            display: "block",
            margin: "auto",
          }}
          onClick$={() => alert("hi!")}
        >
          I say hi!
        </button>
        <div style={{ height: "1500px" }}></div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
