import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../config/emailjs.config';

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState('');

  // Inicializar EmailJS
  useEffect(() => {
    if (emailjsConfig.publicKey && emailjsConfig.publicKey !== 'YOUR_PUBLIC_KEY') {
      emailjs.init(emailjsConfig.publicKey);
    }
  }, []);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t.contact.form.required;
    }

    if (!formData.email.trim()) {
      newErrors.email = t.contact.form.required;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t.contact.form.invalidEmail;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = t.contact.form.required;
    }

    if (!formData.message.trim()) {
      newErrors.message = t.contact.form.required;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setSubmitStatus(null);

    try {
      // Verificar si las credenciales de EmailJS están configuradas
      const isEmailJSConfigured = 
        emailjsConfig.serviceId !== 'YOUR_SERVICE_ID' &&
        emailjsConfig.templateId !== 'YOUR_TEMPLATE_ID' &&
        emailjsConfig.publicKey !== 'YOUR_PUBLIC_KEY';

      if (isEmailJSConfigured) {
        // Usar EmailJS si está configurado
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: emailjsConfig.toEmail,
          reply_to: formData.email,
        };

        const response = await emailjs.send(
          emailjsConfig.serviceId,
          emailjsConfig.templateId,
          templateParams,
          emailjsConfig.publicKey
        );

        if (response.status === 200) {
          setSubmitStatus('success');
          setErrorMessage('');
          
          // Limpiar el formulario después de enviar
          setTimeout(() => {
            setFormData({
              name: '',
              email: '',
              subject: '',
              message: '',
            });
            setShowForm(false);
            setSubmitStatus(null);
            setErrorMessage('');
          }, 2000);
        }
      } else {
        // Usar mailto como alternativa si EmailJS no está configurado
        // NOTA: Esto solo abre el cliente de correo, el usuario debe hacer clic en "Enviar"
        const emailBody = `${language === 'es' ? 'Nombre' : 'Name'}: ${formData.name}\n${language === 'es' ? 'Email' : 'Email'}: ${formData.email}\n\n${language === 'es' ? 'Mensaje' : 'Message'}:\n${formData.message}`;
        
        const mailtoLink = `mailto:raul.davila.esp@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}&reply-to=${encodeURIComponent(formData.email)}`;
        
        window.location.href = mailtoLink;
        
        // Mostrar mensaje informativo
        setSubmitStatus('success');
        setErrorMessage(
          language === 'es'
            ? 'Se abrió tu cliente de correo. Por favor, haz clic en "Enviar" para que el mensaje llegue a raul.davila.esp@gmail.com'
            : 'Your email client opened. Please click "Send" for the message to reach raul.davila.esp@gmail.com'
        );
        
        // Limpiar el formulario después de enviar
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
          setShowForm(false);
          setSubmitStatus(null);
          setErrorMessage('');
        }, 5000); // Más tiempo para que el usuario vea el mensaje
      }
    } catch (error) {
      console.error('Error al enviar el email:', error);
      setSubmitStatus('error');
      
      // Mensajes de error más específicos
      let errorMsg = '';
      if (error.text) {
        // Verificar si es un error de permisos de Gmail
        if (error.text.includes('insufficient authentication scopes') || error.text.includes('Gmail_API')) {
          errorMsg = language === 'es'
            ? 'Error de permisos de Gmail. Ve a EmailJS → Email Services → Edita tu servicio de Gmail → Desconecta y vuelve a conectar tu cuenta de Gmail, aceptando TODOS los permisos. O mejor aún, crea un nuevo servicio usando "EmailJS" (no Gmail) en lugar de Gmail API.'
            : 'Gmail permissions error. Go to EmailJS → Email Services → Edit your Gmail service → Disconnect and reconnect your Gmail account, accepting ALL permissions. Or better yet, create a new service using "EmailJS" (not Gmail) instead of Gmail API.';
        } else if (error.text.includes('template') && error.text.includes('not found')) {
          errorMsg = language === 'es'
            ? 'Template ID no encontrado. Verifica que el Template ID sea correcto en src/config/emailjs.config.js. Ve a https://dashboard.emailjs.com/admin/templates para encontrar el ID correcto.'
            : 'Template ID not found. Please verify the Template ID is correct in src/config/emailjs.config.js. Visit https://dashboard.emailjs.com/admin/templates to find the correct ID.';
        } else if (error.text.includes('service') && error.text.includes('not found')) {
          errorMsg = language === 'es'
            ? 'Service ID no encontrado. Verifica que el Service ID sea correcto en src/config/emailjs.config.js.'
            : 'Service ID not found. Please verify the Service ID is correct in src/config/emailjs.config.js.';
        } else {
          errorMsg = error.text;
        }
      } else if (error.status === 0) {
        errorMsg = language === 'es'
          ? 'Error de conexión. Verifica tu conexión a internet.'
          : 'Connection error. Please check your internet connection.';
      } else if (error.status === 400) {
        errorMsg = language === 'es'
          ? 'Error en los parámetros del formulario. Por favor, verifica los datos.'
          : 'Error in form parameters. Please check the data.';
      } else if (error.status === 404) {
        errorMsg = language === 'es'
          ? 'Template o Service no encontrado. Verifica tus credenciales en src/config/emailjs.config.js'
          : 'Template or Service not found. Please verify your credentials in src/config/emailjs.config.js';
      } else if (error.status === 412) {
        errorMsg = language === 'es'
          ? 'Error de permisos de Gmail. Por favor, reconfigura el servicio de Gmail en EmailJS o usa el servicio de EmailJS directamente.'
          : 'Gmail permissions error. Please reconfigure the Gmail service in EmailJS or use EmailJS service directly.';
      } else {
        errorMsg = language === 'es'
          ? 'Error al enviar el mensaje. Por favor, intenta de nuevo.'
          : 'Error sending message. Please try again.';
      }
      
      setErrorMessage(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setShowForm(false);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setErrors({});
    setSubmitStatus(null);
    setErrorMessage('');
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-light text-gray-900 mb-8">{t.contact.title}</h2>
        <p className="text-lg text-gray-600 mb-12">
          {t.contact.message}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={() => setShowForm(true)}
            className="px-8 py-3 bg-gray-900 text-white text-sm hover:bg-gray-800 transition-colors"
          >
            {t.contact.sendEmail}
          </button>
          <a
            href="https://github.com/radavilae"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-gray-900 text-gray-900 text-sm hover:bg-gray-50 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/radavilae"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-gray-900 text-gray-900 text-sm hover:bg-gray-50 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Modal del formulario */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white max-w-2xl w-full rounded-lg shadow-lg p-8 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
            <h3 className="text-2xl font-light text-gray-900 mb-6">{t.contact.sendEmail}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.contact.form.namePlaceholder}
                  className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.contact.form.emailPlaceholder}
                  className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm text-gray-700 mb-2">
                  {t.contact.form.subject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t.contact.form.subjectPlaceholder}
                  className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
                />
                {errors.subject && (
                  <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.contact.form.messagePlaceholder}
                  rows="6"
                  className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900 resize-none"
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              {submitStatus && (
                <div
                  className={`p-3 rounded ${
                    submitStatus === 'success'
                      ? 'bg-green-50 text-green-700'
                      : 'bg-red-50 text-red-700'
                  }`}
                >
                  {submitStatus === 'success' ? (
                    <div>
                      <p className="font-medium">{t.contact.form.success}</p>
                      {errorMessage && (
                        <p className="text-xs mt-2">{errorMessage}</p>
                      )}
                    </div>
                  ) : (
                    <div>
                      <p className="font-medium">{t.contact.form.error}</p>
                      {errorMessage && (
                        <p className="text-xs mt-1">{errorMessage}</p>
                      )}
                    </div>
                  )}
                </div>
              )}

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-2 bg-gray-900 text-white text-sm hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? t.contact.form.sending : t.contact.form.send}
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  disabled={isLoading}
                  className="px-6 py-2 border border-gray-900 text-gray-900 text-sm hover:bg-gray-50 transition-colors disabled:opacity-50"
                >
                  {t.contact.form.close}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
