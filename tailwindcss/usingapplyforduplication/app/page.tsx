import Image from "next/image";

export default function Home() {
  return (
   <main >
    <div className='title mt-4  italic line-through decoration-black decoration-wavy  '> My Profile</div>
    <h1>Class2020</h1>
    <h2>Chaudhry Wasam Ur Rehman</h2>
    <h3>Telecom Engineer</h3>
    <div className="bg-clip-text text-transparent text-4xl"> Chaudhry Family </div>
   </main>
  );
}

// italic

//bold

// not-italic

// underline,
// overline,
// or line-through
// decoration-solid,
// decoration-double,
// decoration-dotted,
// decoration-dashed,
// and decoration-wavy,


// uppercase
// lowercase
// capitalize
// normal-case


// horizontal alignment of text

// //text-left
// text-center
// text-right
// text-justify

// vertical alignment of text

// align-baseline
// align-top
// align-middle
// align-bottom
// align-text-top
// align-text-bottom
// align-sub
// align-super

// leading-none, which makes the line height exactly the
// size of the font.
// leading-tight
// leading-snug
// leading-normal (1.5 times the font size, usually your default)
// leading-relaxed
// leading-loose


// letter-spacing
// tracking-tight
// tracking-tighter

// tracking-wide
// tracking-wider
// tracking-widest

// The modifier selection applies to text that has been selected by the user, so you
// can apply color (selection:bg-red-400) or other styling (selection:font-bold). The selection
// modifier, if applied to a parent element, will be carried through to all child
// elements.

// Tailwind offers both first-
// line and first-letter modifiers. This seems most applicable for size and weight,
// as in first-letter:text-9xl first-letter:font-bold first-line:text-2xl and so on.

// list-disc (bulleted), list-decimal (numbered), and list-none.can also choose whether the bullet or number is inside or outside the textbox with list-inside and list-outside.


// The special modifier, marker: lets you apply a style to the bullet or number in
// a list. Likely you’d use this for color (marker:text-blue-300) or size (marker:text-2xl).
// A nice thing about the marker modifier is that it can be inherited: you can apply
// it to the ul or ol tag and it will automatically cover the included li tags.

