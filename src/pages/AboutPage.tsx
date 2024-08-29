import { buttonVariants } from "@/components/ui/button";
import { Send, Twitter } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

export default function AboutPage() {
  return (
    <section className="p-24 max-lg:px-4 space-y-8">
      <div className="flex lg:items-center max-lg:flex-col gap-8 max-lg:gap-4">
        <LazyLoadImage
          alt={"logo"}
          effect="opacity"
          wrapperProps={{
            style: { transitionDelay: "1s" },
          }}
          src={"/vite.svg"}
          className="size-24 rounded-lg"
        />
        <h1 className="text-5xl lg:text-9xl font-bold relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50">
          CET LANGET
        </h1>
      </div>
      <article className="lg:w-2/3">
        <h2 className="font-bold text-2xl">Overview from me:</h2>
        <p>
          <i>Cet Langet</i> is a generative ai tool for generate image, more
          specifically text to image. Powered by{" "}
          <a
            href="https://blackforestlabs.ai/"
            target="_blank"
            className="hover:text-sky-500 duration-300 font-medium underline"
          >
            Flux.1-dev
          </a>{" "}
          model , <i>Cet langet</i> is available for free but remember use
          wisely and once again it is free for non-comercial purpose only.
        </p>
        <br />
        <p>
          <i>Cet Langet</i> it literally mean <i>Painting the Sky</i>, is
          popular term from <i>Acehnese</i> people. This term is usually
          directed to a person or group who likes to daydream. I mean not
          daydream but it is freedom to dream isn't it?.
        </p>
        <br />
        <p>
          I developed this website which aims to help people who like to play
          with their mind, another word for imagination, to make their
          imagination come true.
        </p>
      </article>
      <article className="lg:w-2/3">
        <h2 className="font-bold text-2xl">
          Limitation from{" "}
          <a
            href="https://blackforestlabs.ai/"
            target="_blank"
            className="hover:text-sky-500 duration-300 underline"
          >
            Flux.1-dev
          </a>{" "}
          model:
        </h2>
        <ul className="list-inside list-disc">
          <li>
            This model is not intended or able to provide factual information.
          </li>
          <li>
            As a statistical model this checkpoint might amplify existing
            societal biases.
          </li>
          <li>
            The model may fail to generate output that matches the prompts.
          </li>
          <li>
            Prompt following is heavily influenced by the prompting-style.
          </li>
        </ul>
      </article>
      <article className="lg:w-2/3">
        <h2 className="font-bold text-2xl">
          Out-of-Scope use from{" "}
          <a
            href="https://blackforestlabs.ai/"
            target="_blank"
            className="hover:text-sky-500 duration-300 underline"
          >
            Flux.1-dev
          </a>{" "}
          model:
        </h2>
        <p>The model and its derivatives may not be used</p>
        <ul className="list-inside list-disc">
          <li>
            In any way that violates any applicable national, federal, state,
            local or international law or regulation.
          </li>
          <li>
            For the purpose of exploiting, harming or attempting to exploit or
            harm minors in any way; including but not limited to the
            solicitation, creation, acquisition, or dissemination of child
            exploitative content.
          </li>
          <li>
            To generate or disseminate verifiably false information and/or
            content with the purpose of harming others.
          </li>
          <li>
            To harass, abuse, threaten, stalk, or bully individuals or groups of
            individuals.
          </li>
          <li>
            To create non-consensual nudity or illegal pornographic content.
          </li>
          <li>
            For fully automated decision making that adversely impacts an
            individual's legal rights or otherwise creates or modifies a
            binding, enforceable obligation.
          </li>
          <li>
            Generating or facilitating large-scale disinformation campaigns.
          </li>
        </ul>
      </article>
      <p>
        The{" "}
        <a
          href="https://blackforestlabs.ai/"
          target="_blank"
          className="hover:text-sky-500 duration-300 underline"
        >
          Flux.1-dev
        </a>{" "}
        model i used in this project falls under the{" "}
        <a
          href="https://github.com/black-forest-labs/flux/blob/main/model_licenses/LICENSE-FLUX1-dev"
          className="hover:text-sky-500 duration-300 font-medium underline"
          target="_blank"
        >
          FLUX.1-dev Non-Commercial License.
        </a>
      </p>
      <div className="space-y-2">
        <p>Wanna talk more? find me on:</p>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/black-forest-labs/flux/blob/main/model_licenses/LICENSE-FLUX1-dev"
            className={buttonVariants({ size: "icon", variant: "secondary" })}
            target="_blank"
          >
            <Twitter />
            <span className="sr-only">twitter</span>
          </a>
          <a
            href="https://github.com/black-forest-labs/flux/blob/main/model_licenses/LICENSE-FLUX1-dev"
            className={buttonVariants({ size: "icon", variant: "secondary" })}
            target="_blank"
          >
            <Send />
            <span className="sr-only">Tellegram</span>
          </a>
        </div>
      </div>
    </section>
  );
}
