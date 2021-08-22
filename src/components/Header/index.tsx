import { Container } from "./style";

export function Header() {
  return (
    <Container>
      <div>
        <a href="/">
          <img src="/logo.svg" alt="to.do" />
        </a>
      </div>
    </Container>
  );
}
