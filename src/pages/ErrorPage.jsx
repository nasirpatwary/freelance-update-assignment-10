import logo from "../assets/looties2.json";
import Lottie from "lottie-react";
import { ButtonComponent } from "../shared/ButtonComponent";
import Container from "../shared/Container";
const ErrorPage = () => {
  return (
    <Container className="flex flex-col items-center justify-center h-screen">
      <div className="max-w-5/12">
        <Lottie animationData={logo} loop={true}></Lottie>
      </div>
      <div className="text-center space-y-4">
        <h1 className="text-2xl md:text-4xl">
          Sorry, we couldn't find this page.
        </h1>
        <p>
          But dont worry, you can find plenty of other things on our Home page
        </p>
        <ButtonComponent to="/" className="btn-sm border-primary">
          Go To Home
        </ButtonComponent>
      </div>
    </Container>
  );
};

export default ErrorPage;
