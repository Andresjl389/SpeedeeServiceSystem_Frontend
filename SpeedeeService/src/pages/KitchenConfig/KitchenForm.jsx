import React, { useState } from 'react';
import { Save } from 'lucide-react';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Input } from './components/Input/Input';
import { TextArea } from './components/TextArea/TextArea';
import { Select } from './components/Select/Select';
import './KitchenForm.css';
import { handleChangeField, validateKitchenForm, buildKitchenPayload } from './utils/formUtil';

const KitchenConfigForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    area: '',
    num_stations: '',
    staff_count: '',
    notes: '',
    kitchen_type_id: null
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const kitchenTypes = [
    { value: 'fast-food', label: 'Comida Rápida' },
    { value: 'restaurant', label: 'Restaurante' },
    { value: 'cafe', label: 'Cafetería' },
    { value: 'bakery', label: 'Panadería' },
    { value: 'catering', label: 'Catering' }
  ];

  const handleSubmit = () => {
    const newErrors = validateKitchenForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      const payload = buildKitchenPayload(formData);

      console.log('Datos del formulario:', payload);

      setTimeout(() => {
        setIsSubmitting(false);
        alert('Configuración guardada exitosamente!\n\nDatos:\n' + JSON.stringify(payload, null, 2));
      }, 1000);
    }
  };

  return (
    <div className="kitchen-page">
      <Sidebar />
      <div className="kitchen-content">
        <header className="kitchen-header">
          <div>
            <h1>Nueva Configuración de Cocina</h1>
            <p>Complete la información para crear una nueva configuración de cocina</p>
          </div>
        </header>

        <main className="kitchen-main">
          <div className="kitchen-form-container">
            {/* Información Básica */}
            <section className="kitchen-section">
              <h2>Información Básica</h2>
              <Input
                label="Nombre del Proyecto"
                value={formData.name}
                onChange={(e) => handleChangeField('name', e.target.value, formData, setFormData, errors, setErrors)}
                error={errors.name}
                required
                placeholder="Ej: Cocina McDonald's Centro"
              />

              <div className="kitchen-grid-2">
                <Input
                  label="Área (m²)"
                  type="number"
                  value={formData.area}
                  onChange={(e) => handleChangeField('area', e.target.value, formData, setFormData, errors, setErrors)}
                  error={errors.area}
                  required
                  placeholder="0"
                />
                <Select
                  label="Tipo de Cocina"
                  value={formData.kitchen_type_id || ''}
                  onChange={(e) => handleChangeField('kitchen_type_id', e.target.value || null, formData, setFormData, errors, setErrors)}
                  options={kitchenTypes}
                  error={errors.kitchen_type_id}
                />
              </div>
            </section>

            {/* Recursos */}
            <section className="kitchen-section">
              <h2>Recursos</h2>
              <div className="kitchen-grid-2">
                <Input
                  label="Número de Estaciones"
                  type="number"
                  value={formData.num_stations}
                  onChange={(e) => handleChangeField('num_stations', e.target.value, formData, setFormData, errors, setErrors)}
                  error={errors.num_stations}
                  required
                  placeholder="0"
                />
                <Input
                  label="Personal Estimado"
                  type="number"
                  value={formData.staff_count}
                  onChange={(e) => handleChangeField('staff_count', e.target.value, formData, setFormData, errors, setErrors)}
                  error={errors.staff_count}
                  required
                  placeholder="0"
                />
              </div>
            </section>

            {/* Notas Adicionales */}
            <section className="kitchen-section">
              <h2>Notas Adicionales</h2>
              <TextArea
                label="Notas"
                value={formData.notes}
                onChange={(e) => handleChangeField('notes', e.target.value, formData, setFormData, errors, setErrors)}
                error={errors.notes}
                required
                placeholder="Describa cualquier detalle importante sobre la configuración de la cocina..."
                rows={6}
              />
            </section>

            {/* Actions */}
            <div className="kitchen-actions">
              <button type="button" className="kitchen-btn kitchen-btn-cancel" onClick={() => window.history.back()}>
                Cancelar
              </button>
              <button
                type="button"
                className="kitchen-btn kitchen-btn-submit"
                disabled={isSubmitting}
                onClick={handleSubmit}
              >
                <Save size={16} />
                {isSubmitting ? 'Guardando...' : 'Guardar Configuración'}
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default KitchenConfigForm;
