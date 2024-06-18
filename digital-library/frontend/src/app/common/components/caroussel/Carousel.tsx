"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardDocument from "../cardDocument/CardDocument";
import NewCardDocument from "../newCardDocument/NewCardDocument";
import { useAddDocument } from "@/app/hooks/useAddDocument";

// import ReportDefaultImage from "../../../../../../../public/images/reportDefaultImage.png";
// import ReportCard from "../report-card/ReportCard";

const Carousel: React.FC<{
  data: {
    id?: string;
    categorie?: string;
    type?: string;
    author?: string;
    name?: string;
    description?: string;
    coverImage?: any;
    ibsn?: string;
    url?: string;
    num?: number;
    save?: boolean;
    img?: any;
    confidentiality?: string;
    // document: File | undefined;
    file?: File | undefined;
    urlFile?: string;
  }[];
}> = ({ data }) => {
  const { arrayDoc } = useAddDocument();
  const array = [...arrayDoc, ...data];
  const settings = {
    dots: true,
    infinite: false,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    // appendDots: (dots: any) => (
    //   <div
    //     style={{
    //       padding: "10px",
    //     }}
    //   >
    //     <ul style={{ margin: "0px" }}> {dots} </ul>
    //   </div>
    // ),
    // customPaging: (i: number) => (
    //   <div
    //     style={{
    //       width: "30px",
    //       color: "blue",
    //     }}
    //   >
    //     <div className=" mt-6 h-2 rounded-full w-6"></div>
    //   </div>
    // ),
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 1124,
        settings: {
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full ">
      <Slider {...settings}>
        {arrayDoc.map((item) => (
          <div className="px-2">
            {/* <CardDocument
              number={item.num}
              saveDoc={item.save}
              img={item.img}
            /> */}
            <NewCardDocument
              imgCover={item.url && item.url}
              description={item.description}
              title={item.name}
              categorie={item.type}
              id={item.id}
            // saveDoc={item.save}
            // img={item.img}
            />
          </div>
        ))}
          
      </Slider>
    </div>
  );
};

export default Carousel;
