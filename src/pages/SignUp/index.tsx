import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logo} alt="GoBarber" />
      <form>
        <h1>Faça seu Cadatro</h1>
        <Input icon={FiUser} name="name" placeholder="Nome" />
        <Input icon={FiMail} name="email" placeholder="E-mail" />
        <Input
          icon={FiLock}
          name="Password"
          type="password"
          placeholder="Senha"
        />

        <Button type="submit">Cadastrar</Button>
      </form>
      <a href="login">
        <FiArrowLeft />
        Voltar para Logon
      </a>
    </Content>
  </Container>
);

export default SignUp;
