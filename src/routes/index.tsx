import { component$, sync$, $, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
// import { server$ } from "@builder.io/qwik-city";

export default component$(() => {
  const yo = useSignal("hi");
  return (
    <>
      <h1>Hi 👋</h1>
      <div>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
        <div style={{ height: "2000px" }}>hi</div>
        <button
          // prettier-ignore
          onKeyDown$={sync$(async (e: any) => {
            if ("ArrowDown" === e.key) {
              e.preventDefault();
            }
          })}
          style={{
            display: "block",
            margin: "auto",
          }}
          onClick$={$(() => alert("hi!"))}
        >
          I say hi!
        </button>
        <button
          // prettier-ignore
          onKeyDown$={sync$((e: any) => { "ArrowDown" === e.key && e.preventDefault() })}
          style={{
            display: "block",
            margin: "auto",
          }}
          onClick$={$(() => alert("hi!"))}
        >
          I say hi!
        </button>
        <button
          // prettier-ignore
          onKeyDown$={sync$(() => console.log('hi'))}
          style={{
            display: "block",
            margin: "auto",
          }}
          onClick$={$(() => alert("hi!"))}
        >
          I say hi!
        </button>
        <button
          // prettier-ignore
          onKeyDown$={[
            sync$((e: any, el: any) => {
              console.log("hu", e, el);
              if ("ArrowDown" === e.key) {
                e.preventDefault()
              }
              try {
                yo.value = "yolo";
              } catch (e) {
                console.log(e);
              }
              return "hi";
            }),
            // @ts-ignore
            // server$(async (_evt: any, _el: any, _prevState: string) => {
            //   await new Promise((resolve) => setTimeout(resolve, 1000));
            //   // null null, 'hi'
            //   return `hi from server ${_evt} ${_el} ${_prevState }`;
            // }),
            // @ts-ignore
            $(async (_evt: any, _el: any, _prevState: string) => {
              console.log(_prevState, yo.value);
              // debugger
              yo.value = "yolo2";
              await new Promise((resolve) => setTimeout(resolve, 1000));
              console.log(yo.value);
              // debugger;
              return 'hi 2';
            }),
            // @ts-ignore
            $(async (_evt: any, _el: any, _prevState: string) => {
              console.log(_prevState);
              return;
            })
          ]}
          style={{
            display: "block",
            margin: "auto",
          }}
          onClick$={$(() => alert("hi!"))}
        >
          I say hi!
        </button>
        <button
          // prettier-ignore
          onKeyDown$={sync$((e: any) => { "ArrowDown" === e.key && e.preventDefault() })}
          style={{
            display: "block",
            margin: "auto",
          }}
          onClick$={$(() => alert("hi!"))}
        >
          I say hi!
        </button>
        <button
          // prettier-ignore
          onKeyDown$={sync$((e: any) => { console.log("hu"), "ArrowDown" === e.key && e.preventDefault() })}
          style={{
            display: "block",
            margin: "auto",
          }}
          onClick$={$(() => alert("hi!"))}
        >
          I say hi!
        </button>
        <button
          // prettier-ignore
          onKeyDown$={sync$((e: any) => { console.log("hu"), "ArrowDown" === e.key && e.preventDefault() })}
          style={{
            display: "block",
            margin: "auto",
          }}
          onClick$={$(() => alert("hi!"))}
        >
          I say hi!
        </button>
        <button
          // prettier-ignore
          onKeyDown$={sync$((e: any) => { "ArrowDown" === e.key && e.preventDefault() })}
          style={{
            display: "block",
            margin: "auto",
          }}
          onClick$={$(() => alert("hi!"))}
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
