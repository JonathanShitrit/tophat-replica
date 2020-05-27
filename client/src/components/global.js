import React, { useState } from "react";

const [assignmentScores, setAssignmentScores] = useState([])
setAssignmentScores(assignmentScores => assignmentScores.concat(score))

const [assignmentPoints, setAssignmentPoints] = useState([])
setAssignmentPoints(assignmentPoints => assignmentPoints.concat(points))

global.assignmentScores = assignmentScores;
global.assignmentPoints = assignmentPoints;

export default './global.js';