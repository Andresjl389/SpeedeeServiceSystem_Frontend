import React, { useState } from 'react';
import { User, Mail, Lock, Eye, EyeOff, AlertCircle, ArrowLeft, Building } from 'lucide-react';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'El nombre completo es requerido';
    }

    if (!formData.businessName.trim()) {
      newErrors.businessName = 'El nombre del negocio es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El correo electrónico no es válido';
    }

    if (!formData.password) {
      newErrors.password = 'La contraseña es requerida';
    } else if (formData.password.length < 8) {
      newErrors.password = 'La contraseña debe tener al menos 8 caracteres';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Debes confirmar tu contraseña';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'Debes aceptar los términos y condiciones';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setIsSubmitting(true);
      
      const payload = {
        fullName: formData.fullName,
        businessName: formData.businessName,
        email: formData.email,
        password: formData.password
      };
      
      console.log('Sign up data:', payload);
      
      // Simular registro
      setTimeout(() => {
        setIsSubmitting(false);
        alert('¡Cuenta creada exitosamente!\n\nBienvenido a UMB Kitchen');
      }, 1500);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f9fafb',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px'
    }}>
      {/* Sign Up Card */}
      <div style={{
        width: '100%',
        maxWidth: '480px',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        padding: '48px',
        position: 'relative'
      }}>
        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          style={{
            position: 'absolute',
            top: '24px',
            left: '24px',
            padding: '8px',
            border: 'none',
            backgroundColor: 'transparent',
            borderRadius: '6px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            color: '#6b7280',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#f3f4f6';
            e.currentTarget.style.color = '#374151';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#6b7280';
          }}
        >
          <ArrowLeft size={20} />
        </button>

        {/* Logo */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '32px'
        }}>
          <div style={{
            width: '72px',
            height: '72px',
            backgroundColor: '#b91c1c',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 6px -1px rgba(185, 28, 28, 0.3)'
          }}>
            <span style={{ color: 'white', fontWeight: 'bold', fontSize: '24px' }}>UMB</span>
          </div>
        </div>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{
            fontSize: '28px',
            fontWeight: 'bold',
            marginBottom: '8px',
            color: '#111827'
          }}>
            Crea tu cuenta
          </h1>
          <p style={{
            fontSize: '14px',
            color: '#6b7280'
          }}>
            Comienza a optimizar tus cocinas hoy mismo
          </p>
        </div>

        {/* Form */}
        <div>
          {/* Full Name Input */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '8px',
              color: '#374151'
            }}>
              Nombre Completo <span style={{ color: '#dc2626' }}>*</span>
            </label>
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#9ca3af'
              }}>
                <User size={20} />
              </div>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => handleChange('fullName', e.target.value)}
                placeholder="Juan Pérez"
                style={{
                  width: '100%',
                  padding: '12px 12px 12px 44px',
                  fontSize: '14px',
                  border: errors.fullName ? '2px solid #dc2626' : '1px solid #d1d5db',
                  borderRadius: '8px',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => !errors.fullName && (e.target.style.borderColor = '#b91c1c')}
                onBlur={(e) => !errors.fullName && (e.target.style.borderColor = '#d1d5db')}
              />
            </div>
            {errors.fullName && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                marginTop: '6px',
                color: '#dc2626',
                fontSize: '12px'
              }}>
                <AlertCircle size={14} />
                <span>{errors.fullName}</span>
              </div>
            )}
          </div>

          {/* Business Name Input */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '8px',
              color: '#374151'
            }}>
              Nombre del Negocio <span style={{ color: '#dc2626' }}>*</span>
            </label>
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#9ca3af'
              }}>
                <Building size={20} />
              </div>
              <input
                type="text"
                value={formData.businessName}
                onChange={(e) => handleChange('businessName', e.target.value)}
                placeholder="Mi Restaurante"
                style={{
                  width: '100%',
                  padding: '12px 12px 12px 44px',
                  fontSize: '14px',
                  border: errors.businessName ? '2px solid #dc2626' : '1px solid #d1d5db',
                  borderRadius: '8px',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => !errors.businessName && (e.target.style.borderColor = '#b91c1c')}
                onBlur={(e) => !errors.businessName && (e.target.style.borderColor = '#d1d5db')}
              />
            </div>
            {errors.businessName && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                marginTop: '6px',
                color: '#dc2626',
                fontSize: '12px'
              }}>
                <AlertCircle size={14} />
                <span>{errors.businessName}</span>
              </div>
            )}
          </div>

          {/* Email Input */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '8px',
              color: '#374151'
            }}>
              Correo Electrónico <span style={{ color: '#dc2626' }}>*</span>
            </label>
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#9ca3af'
              }}>
                <Mail size={20} />
              </div>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="tu@email.com"
                style={{
                  width: '100%',
                  padding: '12px 12px 12px 44px',
                  fontSize: '14px',
                  border: errors.email ? '2px solid #dc2626' : '1px solid #d1d5db',
                  borderRadius: '8px',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => !errors.email && (e.target.style.borderColor = '#b91c1c')}
                onBlur={(e) => !errors.email && (e.target.style.borderColor = '#d1d5db')}
              />
            </div>
            {errors.email && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                marginTop: '6px',
                color: '#dc2626',
                fontSize: '12px'
              }}>
                <AlertCircle size={14} />
                <span>{errors.email}</span>
              </div>
            )}
          </div>

          {/* Password Input */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '8px',
              color: '#374151'
            }}>
              Contraseña <span style={{ color: '#dc2626' }}>*</span>
            </label>
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#9ca3af'
              }}>
                <Lock size={20} />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => handleChange('password', e.target.value)}
                placeholder="Mínimo 8 caracteres"
                style={{
                  width: '100%',
                  padding: '12px 44px 12px 44px',
                  fontSize: '14px',
                  border: errors.password ? '2px solid #dc2626' : '1px solid #d1d5db',
                  borderRadius: '8px',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => !errors.password && (e.target.style.borderColor = '#b91c1c')}
                onBlur={(e) => !errors.password && (e.target.style.borderColor = '#d1d5db')}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  border: 'none',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  padding: '4px',
                  color: '#9ca3af',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                marginTop: '6px',
                color: '#dc2626',
                fontSize: '12px'
              }}>
                <AlertCircle size={14} />
                <span>{errors.password}</span>
              </div>
            )}
          </div>

          {/* Confirm Password Input */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '8px',
              color: '#374151'
            }}>
              Confirmar Contraseña <span style={{ color: '#dc2626' }}>*</span>
            </label>
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#9ca3af'
              }}>
                <Lock size={20} />
              </div>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                value={formData.confirmPassword}
                onChange={(e) => handleChange('confirmPassword', e.target.value)}
                placeholder="Repite tu contraseña"
                style={{
                  width: '100%',
                  padding: '12px 44px 12px 44px',
                  fontSize: '14px',
                  border: errors.confirmPassword ? '2px solid #dc2626' : '1px solid #d1d5db',
                  borderRadius: '8px',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => !errors.confirmPassword && (e.target.style.borderColor = '#b91c1c')}
                onBlur={(e) => !errors.confirmPassword && (e.target.style.borderColor = '#d1d5db')}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  border: 'none',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  padding: '4px',
                  color: '#9ca3af',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.confirmPassword && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                marginTop: '6px',
                color: '#dc2626',
                fontSize: '12px'
              }}>
                <AlertCircle size={14} />
                <span>{errors.confirmPassword}</span>
              </div>
            )}
          </div>

          {/* Terms Checkbox */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px',
              cursor: 'pointer',
              fontSize: '13px',
              color: '#374151'
            }}>
              <input
                type="checkbox"
                checked={formData.acceptTerms}
                onChange={(e) => handleChange('acceptTerms', e.target.checked)}
                style={{
                  width: '16px',
                  height: '16px',
                  cursor: 'pointer',
                  accentColor: '#b91c1c',
                  marginTop: '2px',
                  flexShrink: 0
                }}
              />
              <span>
                Acepto los{' '}
                <a href="#" style={{ color: '#b91c1c', textDecoration: 'none', fontWeight: '500' }}>
                  términos y condiciones
                </a>
                {' '}y la{' '}
                <a href="#" style={{ color: '#b91c1c', textDecoration: 'none', fontWeight: '500' }}>
                  política de privacidad
                </a>
              </span>
            </label>
            {errors.acceptTerms && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                marginTop: '6px',
                color: '#dc2626',
                fontSize: '12px'
              }}>
                <AlertCircle size={14} />
                <span>{errors.acceptTerms}</span>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            style={{
              width: '100%',
              padding: '14px',
              fontSize: '16px',
              fontWeight: '600',
              border: 'none',
              backgroundColor: isSubmitting ? '#9ca3af' : '#b91c1c',
              color: 'white',
              borderRadius: '8px',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s',
              marginBottom: '24px'
            }}
            onMouseEnter={(e) => {
              if (!isSubmitting) e.currentTarget.style.backgroundColor = '#991b1b';
            }}
            onMouseLeave={(e) => {
              if (!isSubmitting) e.currentTarget.style.backgroundColor = '#b91c1c';
            }}
          >
            {isSubmitting ? 'Creando cuenta...' : 'Crear Cuenta'}
          </button>

          {/* Divider */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '24px'
          }}>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#e5e7eb' }}></div>
            <span style={{ fontSize: '14px', color: '#6b7280' }}>o</span>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#e5e7eb' }}></div>
          </div>

          {/* Social Sign Up */}
          <button
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '14px',
              fontWeight: '500',
              border: '1px solid #d1d5db',
              backgroundColor: 'white',
              color: '#374151',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              marginBottom: '24px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f9fafb';
              e.currentTarget.style.borderColor = '#9ca3af';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.borderColor = '#d1d5db';
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M19.805 10.23c0-.639-.057-1.252-.164-1.841H10.5v3.481h5.218a4.456 4.456 0 01-1.935 2.924v2.265h3.133c1.834-1.688 2.889-4.175 2.889-7.11z" fill="#4285F4"/>
              <path d="M10.5 20c2.617 0 4.813-.868 6.417-2.353l-3.133-2.265c-.868.582-1.98.926-3.284.926-2.527 0-4.666-1.707-5.43-4.002H1.849v2.34A9.996 9.996 0 0010.5 20z" fill="#34A853"/>
              <path d="M5.07 11.306a6.012 6.012 0 010-3.841V5.125H1.849a9.996 9.996 0 000 8.521l3.221-2.34z" fill="#FBBC05"/>
              <path d="M10.5 3.964c1.425 0 2.705.49 3.711 1.452l2.785-2.785C15.308.891 13.112 0 10.5 0 6.699 0 3.35 2.24 1.849 5.465l3.221 2.34c.764-2.295 2.903-4.002 5.43-4.002z" fill="#EA4335"/>
            </svg>
            Registrarse con Google
          </button>

          {/* Sign In Link */}
          <div style={{
            textAlign: 'center',
            fontSize: '14px',
            color: '#6b7280'
          }}>
            ¿Ya tienes una cuenta?{' '}
            <a
              href="#"
              style={{
                color: '#b91c1c',
                textDecoration: 'none',
                fontWeight: '600'
              }}
              onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
            >
              Inicia sesión
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;