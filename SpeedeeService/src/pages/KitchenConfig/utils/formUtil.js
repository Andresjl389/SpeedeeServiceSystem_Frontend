export const handleChangeField = (field, value, formData, setFormData, errors, setErrors) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };
  
  export const validateKitchenForm = (formData) => {
    const newErrors = {};
  
    if (!formData.name.trim()) newErrors.name = 'El nombre es requerido';
    if (!formData.area || formData.area <= 0) newErrors.area = 'El área debe ser mayor a 0';
    if (!formData.num_stations || formData.num_stations <= 0) newErrors.num_stations = 'El número de estaciones debe ser mayor a 0';
    if (!formData.staff_count || formData.staff_count <= 0) newErrors.staff_count = 'El número de personal debe ser mayor a 0';
    if (!formData.notes.trim()) newErrors.notes = 'Las notas son requeridas';
  
    return newErrors;
  };
  
  export const buildKitchenPayload = (formData) => ({
    name: formData.name,
    area: parseFloat(formData.area),
    num_stations: parseInt(formData.num_stations),
    staff_count: parseInt(formData.staff_count),
    notes: formData.notes,
    kitchen_type_id: formData.kitchen_type_id || null,
    kitchen_type: null
  });
  