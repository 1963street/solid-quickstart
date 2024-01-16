import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Hello</Title>
      <h1>Welcome to Clark Street Salon!</h1>
      <h3>Pardon our Dust</h3>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
      <body>
  <img src="img/6.png" alt="demo" class="img-responsive">


.bg {
  /* The image used */
  background-image: URL("1.png");

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size cover;
}
</body>
    </main>
  );
}
