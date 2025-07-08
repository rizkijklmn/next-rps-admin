import {
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup
} from "flowbite-react"

export function FooterMenu() {
  return (
    <Footer className="sticky bottom-0" container>
      <FooterCopyright href="https://uai.ac.id" by="Universitas Al Azhar Indonesia" year={2025} />
      <FooterLinkGroup>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Licensing</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </FooterLinkGroup>
    </Footer>
  )
}