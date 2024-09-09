import React from 'react';
import { Card } from 'react-bootstrap';

function AnalyticsView({ analytics }) {
  return (
    <Card className="mt-3">
      <Card.Body>
        <Card.Title>Analytics</Card.Title>
        <Card.Text>Total Users: {analytics.totalUsers}</Card.Text>
        <Card.Text>Total Courses: {analytics.totalCourses}</Card.Text>
        <Card.Text>Total Projects: {analytics.totalProjects}</Card.Text>
        <Card.Text>Client Satisfaction: {analytics.clientSatisfaction}%</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default AnalyticsView;
