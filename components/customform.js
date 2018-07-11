import Border from './border'

const CustomForm = ({ status, message, onValidated }) => {
  let email, name;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  return (
    <div>
      {!status && (
        <div>
          <input
            ref={node => (email = node)}
            type="email"
            placeholder="Your email"
          />
          <Border>
            <button onClick={submit}>Join List</button>
          </Border>
        </div>
      )}
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}

      <style jsx>{`
        input {
          border: 2px solid var(--theme-blue);
          font-family: inherit;
          font-size: 1rem;
          margin: 0 0 1rem 0;
          padding: 0.25rem;
          border-radius:5px;
          border: var(--border-style);
          background-color: var(--theme-yellow)
        }
        button {
            background: transparent;
            border: none;
            color: inherit;
            cursor: pointer;
            font: inherit;
            line-height: normal;
            margin: 0;
            padding: 0.5rem;
            overflow: visible;
            outline: none;
            text-align: inherit;
            width: auto;
            -webkit-font-smoothing: inherit;
            -moz-osx-font-smoothing: inherit;
            -webkit-appearance: none;
        }
        button::-moz-focus-inner {
            border: 0;
            padding: 0;
        }
      `}</style>
    </div>
  );
}

export default CustomForm
