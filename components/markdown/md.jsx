import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

function remarkIns() {
  const tokenizer = {
    name: "ins",
    level: "inline",
    start(src) {
      return src.indexOf("++");
    },
    tokenizer(eat, value, silent) {
      const match = /^\+\+([^\n]+?)\+\+/.exec(value);
      if (match) {
        if (silent) return true;
        return eat(match[0])({
          type: "ins",
          children: this.tokenizeInline(match[1], eat.now()),
        });
      }
    },
  };

  return function transformer(parser) {
    const inlineTokenizers = parser.inlineTokenizers;
    const inlineMethods = parser.inlineMethods;

    inlineTokenizers.ins = tokenizer;
    inlineMethods.splice(inlineMethods.indexOf("text"), 0, "ins");
  };
}
export default function RenderMd({ markdown }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkIns]}
      rehypePlugins={[rehypeRaw]}
      unwrapDisallowed={true}
      children={markdown}
      components={{
        ins: ({ node, ...props }) => (
          <ins style={{ textDecoration: "font-underline" }} {...props} />
        ),
      }}
    />
  );
}
