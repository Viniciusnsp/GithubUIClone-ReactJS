import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Breadcrumb, RepoIcon, Stats, StarIcon, ForkIcon, LinkButton, GithubIcon } from './styles';

const Repository: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />

        <Link className={'username'} to={'/viniciusnsp'}>
          viniciusnsp
        </Link>

        <span>/</span>

        <Link className={'reponame'} to={'/viniciusnsp/github-clone-reactjs'}>
          github-clone-reactjs
        </Link>
      </Breadcrumb>

      <p>Github UI clone with ReactJS</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          
        </li>
      </Stats>

      <LinkButton href={'https://github.com/viniciusnsp/github-clone-reactjs'}>
        <GithubIcon />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  );
}

export default Repository;