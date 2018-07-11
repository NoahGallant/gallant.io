const Backgrounds = (props) => (
  <div>
    <div className ="bg bg-6"></div>
    <div className ="bg bg-5"></div>
    <div className ="bg bg-4"></div>
    <div className ="bg bg-3"></div>
    <div className ="bg bg-2"></div>
    <div className ="bg bg-1"></div>

    <style jsx>{`
      .content {
        margin-bottom: 0;
      }
      .bg{
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        position:fixed;
      }
      .bg-1{
        background-color: #dfdfdf;
        z-index:-1;
        opacity: ${1-props.offset};
      }
      .bg-2{
        background-color: #FFDFE4;
        z-index:-1;
        opacity: ${2-props.offset};
      }
      .bg-3{
        background-color:#FFF3E2;
        z-index:-1;
        opacity: ${3-props.offset};
      }
      .bg-4{
        background-color: #EAFFEC;
        z-index:-1;
        opacity: ${4-props.offset};
      }
      .bg-5{
        background-color: #F4F6FF;
        z-index:-1;
        opacity: ${5-props.offset};
      }
      .bg-6{
        background-color: #F3E7FF;
        z-index:-1;
      }
    `}</style>
  </div>
)

export default Backgrounds
