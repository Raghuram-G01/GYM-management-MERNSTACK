import { useState } from 'react';
import { useTheme } from '../context/ThemeContext.jsx';

const Settings = () => {
  const { colors } = useTheme();
  
  const initialSettings = [
    {
      title: 'General Settings',
      settings: [
        { name: 'Gym Name', value: 'FitMaker Gym', type: 'text' },
        { name: 'Operating Hours', value: '24/7', type: 'text' },
        { name: 'Contact Email', value: 'info@fitmaker.com', type: 'email' }
      ]
    },
    {
      title: 'Membership Settings',
      settings: [
        { name: 'Trial Period', value: '3 days', type: 'text' },
        { name: 'Late Payment Fee', value: '$10', type: 'text' },
        { name: 'Auto-renewal', value: 'Enabled', type: 'toggle' }
      ]
    },
    {
      title: 'Notification Settings',
      settings: [
        { name: 'Email Notifications', value: 'Enabled', type: 'toggle' },
        { name: 'SMS Notifications', value: 'Disabled', type: 'toggle' },
        { name: 'Push Notifications', value: 'Enabled', type: 'toggle' }
      ]
    }
  ];

  const [settings, setSettings] = useState(initialSettings);
  const [editingCategory, setEditingCategory] = useState(null);
  const [editingSetting, setEditingSetting] = useState(null);

  const handleEdit = (categoryIndex, settingIndex) => {
    setEditingCategory(categoryIndex);
    setEditingSetting(settingIndex);
  };

  const handleSave = (categoryIndex, settingIndex, newValue) => {
    const updatedSettings = [...settings];
    updatedSettings[categoryIndex].settings[settingIndex].value = newValue;
    setSettings(updatedSettings);
    setEditingCategory(null);
    setEditingSetting(null);
  };

  const handleToggle = (categoryIndex, settingIndex) => {
    const updatedSettings = [...settings];
    const currentValue = updatedSettings[categoryIndex].settings[settingIndex].value;
    updatedSettings[categoryIndex].settings[settingIndex].value = currentValue === 'Enabled' ? 'Disabled' : 'Enabled';
    setSettings(updatedSettings);
  };

  return (
    <div style={{ padding: '32px', color: colors.text, maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>System Settings</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '32px', opacity: 0.8 }}>Configure gym settings and preferences</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {settings.map((category, index) => (
          <div key={index} style={{
            backgroundColor: colors.surface,
            border: `1px solid ${colors.border}`,
            borderRadius: '12px',
            padding: '24px',
            boxShadow: `0 4px 12px ${colors.shadow}`
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: colors.primary }}>
              {category.title}
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {category.settings.map((setting, settingIndex) => (
                <div key={settingIndex} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '12px 0',
                  borderBottom: settingIndex < category.settings.length - 1 ? `1px solid ${colors.border}` : 'none'
                }}>
                  <div>
                    <div style={{ fontWeight: '500', marginBottom: '4px' }}>{setting.name}</div>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {setting.type === 'toggle' ? (
                      <div 
                        onClick={() => handleToggle(index, settingIndex)}
                        style={{
                          width: '50px',
                          height: '24px',
                          backgroundColor: setting.value === 'Enabled' ? colors.primary : '#ccc',
                          borderRadius: '12px',
                          position: 'relative',
                          cursor: 'pointer'
                        }}
                      >
                        <div style={{
                          width: '20px',
                          height: '20px',
                          backgroundColor: 'white',
                          borderRadius: '50%',
                          position: 'absolute',
                          top: '2px',
                          left: setting.value === 'Enabled' ? '28px' : '2px',
                          transition: 'left 0.2s'
                        }} />
                      </div>
                    ) : editingCategory === index && editingSetting === settingIndex ? (
                      <input
                        type={setting.type}
                        defaultValue={setting.value}
                        onBlur={(e) => handleSave(index, settingIndex, e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSave(index, settingIndex, e.target.value)}
                        autoFocus
                        style={{
                          padding: '8px 12px',
                          border: `2px solid ${colors.primary}`,
                          borderRadius: '6px',
                          backgroundColor: colors.background,
                          color: colors.text,
                          minWidth: '200px'
                        }}
                      />
                    ) : (
                      <input
                        type={setting.type}
                        value={setting.value}
                        style={{
                          padding: '8px 12px',
                          border: `1px solid ${colors.border}`,
                          borderRadius: '6px',
                          backgroundColor: colors.background,
                          color: colors.text,
                          minWidth: '200px'
                        }}
                        readOnly
                      />
                    )}
                    
                    {setting.type !== 'toggle' && (
                      <button 
                        onClick={() => handleEdit(index, settingIndex)}
                        style={{
                          padding: '6px 12px',
                          backgroundColor: colors.primary,
                          color: 'white',
                          border: 'none',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          fontSize: '0.9rem'
                        }}
                      >
                        Edit
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div style={{ marginTop: '32px', display: 'flex', gap: '16px', justifyContent: 'center' }}>
        <button style={{
          padding: '12px 24px',
          backgroundColor: colors.primary,
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '1rem'
        }}>
          Save All Changes
        </button>
        <button style={{
          padding: '12px 24px',
          backgroundColor: 'transparent',
          color: colors.primary,
          border: `1px solid ${colors.primary}`,
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '1rem'
        }}>
          Reset to Defaults
        </button>
      </div>
    </div>
  );
};

export default Settings;