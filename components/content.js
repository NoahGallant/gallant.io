const Content = (props) => (
  <div>
    <section>
      <a name={props.anchor}></a>
      <div className="middle">
        <div className="info">
          <br/>
          <h1>{props.title}</h1>
          {props.children}
        </div>
      </div>
    </section>

    <style jsx>{`
      section {
        border-bottom: none;
        height:100vh;
        display:table;
        margin-left:30vw;
        padding-right:200px;
        padding-left:50px;
        top:0;
        z-index:10;
      }
      .info{
        padding-left:3rem; 
        z-index:100;
      }
      .middle {
        display: table-cell;
        height:100%;
        width:100vw;
        vertical-align: middle;
      }
      @media (max-width: 700px) {
        .middle {
          vertical-align:bottom;
        }
        section {
            left:0;
            padding-left:50px;
            padding-right:50px;
            right:0;
            margin: 0px;
        }
        .info{
          padding-left:0;
        }
      }
    `}</style>
  </div>
)

export default Content
