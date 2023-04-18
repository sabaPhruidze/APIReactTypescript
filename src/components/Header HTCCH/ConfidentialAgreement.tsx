import React from "react";
import { useState } from "react";
import styles from "./HTCCH.module.css";
import accordionArrow from "../../icon/accordionArrow.svg";
import CFChild from "./CFChild";
export default function ConfidentialAgreement(props: any) {
  const [cAN, sAN] = useState<number | null>(0); // cAN current Accordion number , set Accordion number
  const { cSM } = props;

  const DATA = [
    {
      number: 1,
      title: "Definition of Confidential Information",
      content:
        'The term "Confidential Information" means any and all information that is disclosed by one party (the "Disclosing Party") to the other party (the "Receiving Party"), either directly or indirectly, in writing, orally, or by inspection of tangible objects, which is marked as "confidential" or which, under the circumstances surrounding the disclosure, ought to be treated as confidential.',
    },
    {
      number: 2,
      title: "Obligations of Receiving Party",
      content:
        "The Receiving Party shall hold and maintain the Confidential Information in strictest confidence, using the same degree of care that it uses to protect its own confidential information of a similar nature, but in no event less than reasonable care. The Receiving Party shall not disclose, distribute, publish, transmit, or otherwise make available the Confidential Information to any third party without the prior written consent of the Disclosing Party.",
    },
    {
      number: 3,
      title: "Exceptions to Confidential Information",
      content:
        "The obligations set forth in this Agreement shall not apply to any Confidential Information that: (a) is or becomes generally known to the public through no fault or breach of this Agreement by the Receiving Party; (b) was in the Receiving Party's possession prior to receipt from the Disclosing Party; (c) is rightfully obtained by the Receiving Party from a third party without breach of any obligation of confidentiality; or (d) is independently developed by the Receiving Party without reference to the Confidential Information.",
    },
    {
      number: 4,
      title: "Return of Confidential Information",
      content:
        "Upon written request of the Disclosing Party, the Receiving Party shall promptly return to the Disclosing Party all copies, whether in written, electronic, or other form or media, of the Confidential Information, or destroy all such copies and provide written certification of such destruction.",
    },
    {
      number: 5,
      title: "Term and Termination",
      content:
        "This Agreement and the obligations of the Receiving Party shall remain in effect until such time as the Confidential Information is no longer confidential, as determined by the Disclosing Party, or until terminated by the mutual written agreement of both parties. The Receiving Party's obligations of confidentiality and non-use shall survive the termination of this Agreement for a period of five (5) years.",
    },
  ];
  return (
    <div
      className={
        cSM
          ? `${styles.fullAccordionContainerWhite} ${styles.childNoBlur}`
          : `${styles.fullAccordionContainerBlack} ${styles.childNoBlur}`
      }
    >
      <div
        className={
          cSM
            ? `${styles.accordionContainerChange} `
            : `${styles.accordionContainer}`
        }
      >
        {DATA.map((data) => (
          <CFChild
            accordionArrow={accordionArrow}
            cAN={cAN}
            sAN={sAN}
            number={data.number}
            title={data.title}
            content={data.content}
            cSM={cSM}
          />
        ))}
      </div>
    </div>
  );
}
