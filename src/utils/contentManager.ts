import { startLoading, endLoading } from './loading';

// Content Management System - Database Only (Neon PostgreSQL via Netlify Functions)

export interface HeroContent {
  tr: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
  de: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
  en: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
}

export interface Solution {
  id: string;
  icon: string;
  title: {
    tr: string;
    de: string;
    en: string;
  };
  description: {
    tr: string;
    de: string;
    en: string;
  };
}

export interface Reference {
  id: string;
  name: {
    tr: string;
    de: string;
    en: string;
  };
  description: {
    tr: string;
    de: string;
    en: string;
  };
  image: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: {
    tr: string;
    de: string;
    en: string;
  };
}

export interface SiteContent {
  hero: HeroContent;
  solutions: Solution[];
  references: Reference[];
  contact: ContactInfo;
  lastUpdated: string;
}

// Default content (fallback only)
const defaultContent: SiteContent = {
  hero: {
    tr: {
      title: 'Dijital Dönüşüm',
      subtitle: 'Geleceğin teknolojileri ile işinizi güçlendirin',
      buttonText: 'Keşfedin'
    },
    de: {
      title: 'Digitale Transformation',
      subtitle: 'Stärken Sie Ihr Unternehmen mit den Technologien der Zukunft',
      buttonText: 'Entdecken'
    },
    en: {
      title: 'Digital Transformation',
      subtitle: 'Empower your business with tomorrow\'s technologies',
      buttonText: 'Explore'
    }
  },
  solutions: [],
  references: [],
  contact: {
    email: 'info@digitaliulm.de',
    phone: '+49 123 456 789',
    address: {
      tr: 'Ulm, Almanya',
      de: 'Ulm, Deutschland',
      en: 'Ulm, Germany'
    }
  },
  lastUpdated: new Date().toISOString()
};

// Backend API URL (Netlify Functions)
const API_URL = (import.meta as any).env?.VITE_API_URL || '/.netlify/functions';
console.debug('[contentManager] API_URL =', API_URL);

// Save content to database
export const saveContent = async (content: SiteContent): Promise<void> => {
  startLoading();
  try {
    content.lastUpdated = new Date().toISOString();
    const response = await fetch(`${API_URL}/content`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(content),
    });
    if (!response.ok) {
      throw new Error(`Failed to save content: ${response.status}`);
    }
    console.log('✅ Content saved to database');
  } catch (error) {
    console.error('❌ Error saving content to database:', error);
    throw error;
  } finally {
    endLoading();
  }
};

// Load content from database
export const loadContent = async (): Promise<SiteContent> => {
  startLoading();
  try {
    const response = await fetch(`${API_URL}/content`);
    if (!response.ok) throw new Error(String(response.status));
    const content = await response.json();
    console.log('✅ Content loaded from database');
    return content;
  } catch (error) {
    console.error('❌ Error loading content from database:', error);
    console.log('📝 Falling back to default content');
    return defaultContent;
  } finally {
    endLoading();
  }
};

// Sync version (returns default for components that need sync)
export const loadContentSync = (): SiteContent => {
  // Database-only mode; sync version returns defaults
  return defaultContent;
};

// Initialize content (no-op in database mode)
export const initializeContent = (): void => {
  console.debug('initializeContent: skipped (database-first)');
};

// Export content as JSON file
export const exportContent = async (): Promise<void> => {
  const content = await loadContent();
  const dataStr = JSON.stringify(content, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);

  const link = document.createElement('a');
  link.href = url;
  link.download = `digitaliulm_content_${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);

  console.log('📥 Content exported');
};

// Import content from JSON file
export const importContent = (file: File): Promise<void> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const content = JSON.parse(e.target?.result as string);
        saveContent(content).then(() => {
          console.log('📤 Content imported successfully');
          resolve();
        }).catch(reject);
      } catch (error) {
        console.error('❌ Error importing content:', error);
        reject(error);
      }
    };

    reader.onerror = () => {
      reject(new Error('File reading failed'));
    };

    reader.readAsText(file);
  });
};

// Update hero content
export const updateHeroContent = async (hero: HeroContent): Promise<void> => {
  const content = await loadContent();
  content.hero = hero;
  await saveContent(content);
};

// Update solutions
export const updateSolutions = async (solutions: Solution[]): Promise<void> => {
  const content = await loadContent();
  content.solutions = solutions;
  await saveContent(content);
};

// Update references
export const updateReferences = async (references: Reference[]): Promise<void> => {
  const content = await loadContent();
  content.references = references;
  await saveContent(content);
};

// Update contact
export const updateContact = async (contact: ContactInfo): Promise<void> => {
  const content = await loadContent();
  content.contact = contact;
  await saveContent(content);
};
