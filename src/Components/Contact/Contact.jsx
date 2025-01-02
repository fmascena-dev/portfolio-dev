import './ContactStyles.scss';
import { useForm } from 'react-hook-form';

export default function Contato() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    alert(
      'Mensagem enviada com sucesso! Obrigado pelo seu contato, responderei em breve!',
    );
    console.log('Dados enviados:', data);
    reset();
  };

  return (
    <section className="form-container" id="contato">
      <h1>Entre em Contato</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div data-aos="fade-right" className="form-group">
          <label htmlFor="nome">Nome Completo:</label>
          <input
            id="nome"
            type="text"
            {...register('nome', { required: 'O nome é obrigatório!' })}
          />
          {errors.nome && (
            <p className="error-message">{errors.nome.message}</p>
          )}
        </div>

        <div data-aos="fade-left" className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'O email é obrigatório.',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Insira um email válido.',
              },
            })}
          />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </div>

        <div data-aos="fade-right" className="form-group">
          <label htmlFor="telefone">Telefone:</label>
          <input
            id="telefone"
            type="tel"
            {...register('telefone', {
              required: 'O telefone é obrigatório.',
              pattern: {
                value: /^\(?\d{2}\)?[\s-]?\d{4,5}[-\s]?\d{4}$/,
                message: 'Insira um número de telefone válido.',
              },
            })}
          />
          {errors.telefone && (
            <p className="error-message">{errors.telefone.message}</p>
          )}
        </div>
        <div data-aos="fade-left" className="form-group">
          <label htmlFor="assunto">Assunto:</label>
          <input
            id="assunto"
            type="text"
            {...register('assunto', { required: 'O assunto é obrigatório.' })}
          />
          {errors.assunto && (
            <p className="error-message">{errors.assunto.message}</p>
          )}
        </div>

        <div data-aos="fade-right" className="form-group">
          <label htmlFor="mensagem">Mensagem:</label>
          <textarea
            id="mensagem"
            rows="5"
            {...register('mensagem', { required: 'A mensagem é obrigatória.' })}
          ></textarea>
          {errors.mensagem && (
            <p className="error-message">{errors.mensagem.message}</p>
          )}
        </div>

        <button type="submit" className="submit-button">
          Enviar
        </button>
      </form>
    </section>
  );
}
