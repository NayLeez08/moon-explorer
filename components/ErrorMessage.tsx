interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export default function ErrorMessage({
  message,
  onRetry,
}: ErrorMessageProps) {

  return (
    <div className="error-container">

      <div className="error-icon">
        ⚠️
      </div>

      <h2>
        Ocurrió un error
      </h2>

      <p>
        {message}
      </p>

      {onRetry && (

        <button
          className="retry-button"
          onClick={onRetry}
        >
          Intentar nuevamente
        </button>

      )}

    </div>
  );
}