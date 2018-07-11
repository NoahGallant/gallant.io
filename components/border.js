function Border(props) {
  return (
    <div>
      <div className="button-body">
        {props.children}
      </div>

      <style jsx>{`
        .button-body {
          background-color: var(--theme-button-blue);
          border-radius: 10px;
          border: 3px solid var(--theme-blue);
          box-shadow: 4px 6px 0px 0px var(--theme-accent);
          color: white;
          cursor: pointer;
          display: inline-block;
          font-family: var(--space-font);
          font-weight:900;
        }
        
        .button-body:hover {
          transform: translate(2px, 2px);
          box-shadow: 2px 4px 0px 0px var(--theme-accent);
        }
      `}</style>
    </div>
  );
}

export default Border
