import "../assets/CSS/WebPrototype.css";
import { useState, useLayoutEffect, useRef } from "react";

function getRect(el) {
  return el.getBoundingClientRect();
}

function flip(firstRect, el) {
  requestAnimationFrame(() => {
    const lastEl = el;
    const lastRect = getRect(lastEl);

    const dx = lastRect.x - firstRect.x;
    const dy = lastRect.y - firstRect.y;
    const dw = lastRect.width / firstRect.width;
    const dh = lastRect.height / firstRect.height;

    lastEl.dataset.flipping = true;
    lastEl.style.setProperty("--dx", dx);
    lastEl.style.setProperty("--dy", dy);
    lastEl.style.setProperty("--dw", dw);
    lastEl.style.setProperty("--dh", dh);

    requestAnimationFrame(() => delete lastEl.dataset.flipping);
  });
}

function useFlip(ref) {
  const rectRef = useRef(null);
  useLayoutEffect(() => {
    if (ref.current) {
      if (!rectRef.current) rectRef.current = getRect(ref.current);

      flip(rectRef.current, ref.current);
      rectRef.current = getRect(ref.current);
    }
  });
}

function ImageTitle(props) {
  const ref = useRef(null);
  useFlip(ref);
  return <span {...props} ref={ref} data-flip className="title" />;
}

function Image({ src, title, selected, ...props }) {
  const ref = useRef(null);
  useFlip(ref);

  return (
    <div
      className="web-image web-frame"
      data-selected={selected || undefined}
      {...props}
    >
      <div className="web-top-bar"></div>
      <img src={src} data-flip ref={ref} />
    </div>
  );
}

function WebProjectSection({ svg, title, subtitle, slides }) {
  const [selected, setSelected] = useState(0);

  return (
    <div>
      <div className="logo-prototype">
        <div className="logo-p">{svg}</div>

        <div className="logo-t">
          <span>
            <a
              style={{ color: "white", textDecoration: "none" }}
              href="#"
              target="_blank"
            >
              {title} (click title to view)
            </a>
          </span>
          <p>{subtitle}</p>
        </div>
      </div>

      <div className="gallery">
        {slides?.map((slide, index) => (
          <Image
            key={index}
            src={slide.image}
            title={slide.title}
            selected={index === selected}
            onClick={() => setSelected(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default WebProjectSection;
