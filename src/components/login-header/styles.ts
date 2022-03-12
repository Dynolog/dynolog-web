import { styled } from '../../styles/stitches.config';

export const HeaderContainer = styled('header', {
  display: 'flex',
  flexDirection: 'row',
});

export const NavContainer = styled('nav', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
});

export const LogoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 16,
  borderRadius: 20,
  marginRight: 56,
  backgroundColor: 'rgba(42, 45, 63,0.5)',
});

export const Pointer = styled('div', {
  width: 28,
  height: 28,
  borderRadius: '50%',
  backgroundColor: '$brand300',
  marginRight: 16,
});
