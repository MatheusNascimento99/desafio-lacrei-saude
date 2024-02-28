import{ render, fireEvent } from '@testing-library/react';
import HeaderFull from '../index';

describe('HeaderFull componente', () => {
  it('Deverá renderizar sem erros', () => {
    render(<HeaderFull />);
  });

  it('Deverá navegar entre as páginas ao ser clicado', () => {
    const { getByText } = render(<HeaderFull />);
    fireEvent.click(getByText('Home'));
    fireEvent.click(getByText('Pessoa Usuária'));
    fireEvent.click(getByText('Profissional'));
  });

  it('Deverá aplicar estilos corretos aos links', () => {
    const { getByText } = render(<HeaderFull />);
    const homeLink = getByText('Home');
    const userLink = getByText('Pessoa Usuária');
    const profLink = getByText('Profissional');
    expect(homeLink).toHaveClass('homePage');
    expect(userLink).toHaveClass('userPage');
    expect(profLink).toHaveClass('profPage');
  });

});
