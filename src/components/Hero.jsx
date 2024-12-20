import React, { useState } from "react";
import { Button } from "./Button";
import { Container } from "./Container";
import Dropdown from "./DropdownButton";

export function Hero() {
  const dropdownOptions = [
    {
      label: "Microsoft Store",
      link: "https://www.microsoft.com/store/apps/9PCKDV76GL75",
    },
    {
      label: "GitHub",
      link: "https://github.com/Phalcode/gamevault-app/releases",
    },
  ];

  const [isSpinning, setIsSpinning] = useState(false);

  const spindice = () => {
    if (isSpinning) return;
    setIsSpinning(!isSpinning);
    setTimeout(() => setIsSpinning(false), 1000);
  };

  return (
    <Container className="pb-16 pt-20 text-center">
      <button onClick={spindice}>
        <img
          src="/img/logo.png"
          className={`h-48 nozoom cursor-pointer ${
            isSpinning ? "animate-spin" : ""
          }`}
          alt="Logo"
        />
      </button>

      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight sm:text-7xl">
        Create{" "}
        <span className="relative whitespace-nowrap text-primary-darker">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute left-0 top-2/3 h-[0.58em] w-full fill-primary-default opacity-30"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative">your own</span>
        </span>
        <br />
        gaming platform.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-text-light">
        Hoarding video games is fun, but a chaotic list of files on a network
        share is not. <br /> Let GameVault organize everything for you and enjoy
        a selfhosted Steam-like experience for games on your own home server.
      </p>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
        <Button href="/docs/intro">Learn more</Button>
        <Dropdown options={dropdownOptions}>
          Download Client{" "}
          <svg
            className="-mr-1 h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </Dropdown>
      </div>
    </Container>
  );
}
