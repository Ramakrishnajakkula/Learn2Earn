// api.js

export const fetchUsers = async () => {
  return [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ];
};

export const updateUser = async (updatedUser) => {
  return updatedUser;
};

export const fetchCourses = async () => {
  return [
    { id: 1, name: 'React Basics', description: 'Learn the basics of React.' },
    { id: 2, name: 'Advanced React', description: 'Dive deep into React.' },
  ];
};

export const addCourse = async (newCourse) => {
  return { id: Date.now(), ...newCourse };
};

export const updateCourse = async (updatedCourse) => {
  return updatedCourse;
};

export const fetchProjects = async () => {
  return [
    { id: 1, name: 'Project A', description: 'Description of Project A.' },
    { id: 2, name: 'Project B', description: 'Description of Project B.' },
  ];
};

export const updateProject = async (updatedProject) => {
  return updatedProject;
};

export const fetchAnalytics = async () => {
  return {
    totalUsers: 100,
    totalCourses: 10,
    totalProjects: 5,
    clientSatisfaction: 90
  };
};
