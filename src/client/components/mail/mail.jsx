import React from "react";
import {
  Email, Item, Box, Image, Span,
} from "react-html-email";
import "./mail.css";

export default function InlineLink() {
  const headCss = {
    fontFamily: "Lato",
    fontSize: "24px",
    lineHeight: "34px",
    color: "#01216B",
  };
  const textCss = {
    fontFamily: "Lato",
    fontSize: "18px",
    color: "#01216B",
    lineHeight: "24px",
  };
  const secondHead = {
    fontWeight: "bold",
  };
  return (
    <Email>
      <Item align="center">
        <Span {...headCss}>Hello,</Span>
      </Item>
      <Item align="center">
        <Span {...headCss}>Thank you for getting in touch!</Span>
      </Item>
      <br />
      <br />
      <Item>
        <Span {...textCss}>
          As promised, here goes a hand-picked, well-detailed list of Top
        </Span>
      </Item>
      <Item>
        <Span {...textCss}>
          <b>300 Investment Banks and M&A Advisors in New York City.</b>
        </Span>
      </Item>
      <Item>
        <Span {...textCss}>May this list help you invest wisely!</Span>
      </Item>
      <br />
      <Item>
        <Span {...textCss}>
          If you would like to discuss your investment experience with our
          experts, please, let me know.
        </Span>
      </Item>
      <br />
      <Item>
        <Span {...textCss}>I will be looking forward to your response.</Span>
      </Item>
      <br />
      <Item>
        <Span {...textCss}>Sincerely,</Span>
      </Item>
      <br />
      <Item>
        <Box>
          <td style={{ paddingRight: "5px" }}>
            <Image
              width={85}
              hegiht={85}
              alt="Mike Casey"
              src="https://res.cloudinary.com/dnpawq0kt/image/upload/v1584708037/Mask_Group_1_ievaxg.png"
            />
          </td>
        </Box>
        <Box>
          <td
            style={{
              borderLeft: "2px solid #0039A6",
              borderRadius: "5px",
              padding: "15px 5px 5px 0px",
              marginTop: "20px",
              height: "72px",
            }}
          />
        </Box>
        <Box>
          <Span {...secondHead} {...textCss}>
            Mike Casey,
          </Span>
          <Item>
            <Span {...textCss}>Partner, Executive Committee</Span>
          </Item>
          <Item>
            <Span {...textCss}>Member TechCXO</Span>
          </Item>
        </Box>
      </Item>
    </Email>
  );
}
