import styled from 'styled-components';

export const FooterContainer = styled.footer`
background-color: black;
`

export const FooterWrap = styled.div`
padding: 48px 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1100px;
margin: 0 auto;
min-height: calc(40vh - 40px);
`

export const FooterLinksContainer = styled.div`
display: flex;
justify-content: center;

@media screen and (max-width: 820px) {
    padding-top: 32px;
}
`

export const FooterLinksWrapper = styled.div`
display: flex;


@media screen and (max-width: 820px) {
    flex-direction: column;
}
`

export const FooterLinkItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 16px;
text-align: center;
width: auto;
box-sizing: border-box;
color: white;

@media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
}
`

export const FooterLinkTitle = styled.div`
font-size: 14px;
margin-bottom: 16px;
`
