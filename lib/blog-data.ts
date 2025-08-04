export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-we-love-open-source",
    title: "Why We Love Open Source: Building the Future Together",
    excerpt:
      "Exploring the philosophy behind open source development and how it shapes our community's approach to building software that matters.",
    content: `# Why We Love Open Source: Building the Future Together

Open source software has fundamentally changed how we think about technology, collaboration, and innovation. At Geek Engineers, we believe that the best solutions emerge when brilliant minds work together without barriers.

## The Power of Collective Intelligence

When developers from around the world can contribute to a project, magic happens. Each person brings their unique perspective, experience, and expertise to the table. This diversity of thought leads to more robust, secure, and innovative solutions.

\`\`\`javascript
// Example: A simple contribution that made a big difference
function optimizeSearch(query, data) {
  // Original implementation
  return data.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );
}

// Community-improved version with fuzzy matching
function optimizeSearch(query, data) {
  const threshold = 0.6;
  return data.filter(item => {
    const similarity = calculateSimilarity(query, item.title);
    return similarity >= threshold;
  });
}
\`\`\`

## Breaking Down Barriers

Open source removes the traditional gatekeepers of technology. Whether you're a student in Bangladesh, a developer in Brazil, or an engineer in Berlin, you can contribute to projects that impact millions of users worldwide.

## Learning in Public

One of the most beautiful aspects of open source is how it encourages learning in public. When you contribute to open source projects, you're not just writing code – you're participating in a global classroom where everyone teaches and everyone learns.

## The Future is Collaborative

As we face increasingly complex technological challenges, from climate change to digital privacy, we need collaborative solutions. Open source provides the framework for this collaboration, enabling us to build tools that serve humanity rather than just profit margins.

Join us in building the future, one commit at a time.`,
    author: "Alex Chen",
    publishDate: "2024-01-15",
    readTime: "5 min read",
    tags: ["Open Source", "Community", "Philosophy"],
  },
  {
    slug: "mastering-async-javascript",
    title: "Mastering Async JavaScript: From Callbacks to Async/Await",
    excerpt:
      "A comprehensive guide to understanding asynchronous JavaScript, covering callbacks, promises, and modern async/await patterns with practical examples.",
    content: `# Mastering Async JavaScript: From Callbacks to Async/Await

Asynchronous programming is one of the most important concepts in JavaScript. Understanding how to handle async operations effectively can make the difference between smooth, responsive applications and frustrating user experiences.

## The Evolution of Async JavaScript

### 1. Callbacks: The Beginning

\`\`\`javascript
function fetchUserData(userId, callback) {
  setTimeout(() => {
    const userData = { id: userId, name: 'John Doe' };
    callback(null, userData);
  }, 1000);
}

fetchUserData(123, (error, user) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('User:', user);
  }
});
\`\`\`

### 2. Promises: A Better Way

\`\`\`javascript
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userData = { id: userId, name: 'John Doe' };
      resolve(userData);
    }, 1000);
  });
}

fetchUserData(123)
  .then(user => console.log('User:', user))
  .catch(error => console.error('Error:', error));
\`\`\`

### 3. Async/Await: The Modern Approach

\`\`\`javascript
async function fetchUserData(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const userData = { id: userId, name: 'John Doe' };
      resolve(userData);
    }, 1000);
  });
}

async function displayUser() {
  try {
    const user = await fetchUserData(123);
    console.log('User:', user);
  } catch (error) {
    console.error('Error:', error);
  }
}
\`\`\`

## Best Practices

1. **Always handle errors** - Use try/catch with async/await
2. **Avoid blocking the main thread** - Keep async operations non-blocking
3. **Use Promise.all for parallel operations** - Don't await unnecessarily
4. **Consider using libraries** - Tools like Axios can simplify HTTP requests

## Conclusion

Mastering async JavaScript takes practice, but the patterns shown here will serve you well in building modern, responsive applications.`,
    author: "Sarah Kim",
    publishDate: "2024-01-10",
    readTime: "8 min read",
    tags: ["JavaScript", "Async", "Programming", "Tutorial"],
  },
  {
    slug: "building-scalable-apis",
    title: "Building Scalable APIs: Lessons from Production",
    excerpt:
      "Real-world insights on designing and implementing APIs that can handle millions of requests while maintaining performance and reliability.",
    content: `# Building Scalable APIs: Lessons from Production

After building and maintaining APIs that serve millions of requests daily, I've learned some hard lessons about what it takes to build truly scalable systems.

## The Foundation: Design Principles

### 1. Stateless Design

\`\`\`python
# Bad: Stateful API
class UserSession:
    def __init__(self):
        self.user_data = {}

    def get_user(self, user_id):
        if user_id in self.user_data:
            return self.user_data[user_id]
        # Fetch from database...

# Good: Stateless API
def get_user(user_id, auth_token):
    # Validate token and fetch user data fresh each time
    user = authenticate_and_fetch(user_id, auth_token)
    return user
\`\`\`

### 2. Proper Error Handling

\`\`\`json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input parameters",
    "details": {
      "email": "Email format is invalid",
      "age": "Age must be between 13 and 120"
    },
    "timestamp": "2024-01-15T10:30:00Z",
    "request_id": "req_123456789"
  }
}
\`\`\`

## Performance Optimization

### Caching Strategy

- **Redis** for session data and frequently accessed objects
- **CDN** for static assets and cacheable responses
- **Database query optimization** with proper indexing

### Rate Limiting

\`\`\`javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP'
});

app.use('/api/', limiter);
\`\`\`

## Monitoring and Observability

The key to maintaining scalable APIs is knowing what's happening in production:

1. **Metrics**: Response times, error rates, throughput
2. **Logging**: Structured logs with correlation IDs
3. **Alerting**: Proactive notifications for issues
4. **Health checks**: Automated monitoring of service health

## Conclusion

Building scalable APIs is an iterative process. Start with solid fundamentals, measure everything, and optimize based on real usage patterns.`,
    author: "Mike Rodriguez",
    publishDate: "2024-01-05",
    readTime: "12 min read",
    tags: ["API", "Backend", "Scalability", "Performance"],
  },
  {
    slug: "the-art-of-code-review",
    title: "The Art of Code Review: Building Better Software Together",
    excerpt:
      "How effective code reviews can improve code quality, share knowledge, and strengthen team collaboration in software development projects.",
    content: `# The Art of Code Review: Building Better Software Together

Code reviews are one of the most powerful tools we have for improving code quality, sharing knowledge, and building stronger development teams. Yet many developers approach them with dread rather than excitement.

## Why Code Reviews Matter

### Quality Assurance
- Catch bugs before they reach production
- Ensure coding standards are followed
- Identify potential security vulnerabilities

### Knowledge Sharing
- Learn new techniques and patterns
- Understand different parts of the codebase
- Spread domain knowledge across the team

### Team Building
- Foster collaboration and communication
- Build trust and shared ownership
- Create learning opportunities

## Best Practices for Reviewers

### 1. Be Constructive, Not Critical

\`\`\`javascript
// Instead of: "This is wrong"
// Say: "Consider using a Map here for O(1) lookups instead of O(n) array search"

const users = []; // Current implementation

// Suggested improvement
const userMap = new Map();
\`\`\`

### 2. Focus on the Code, Not the Person

Good feedback focuses on the code and its impact:
- "This function could be more readable if we extract the validation logic"
- "This approach might cause performance issues with large datasets"

### 3. Explain the Why

Don't just point out issues – explain the reasoning:
- "Using const here prevents accidental reassignment and makes the intent clearer"
- "This pattern could lead to memory leaks because..."

## Best Practices for Authors

### 1. Keep PRs Small and Focused
- Aim for 200-400 lines of changes
- One feature or fix per PR
- Include tests with your changes

### 2. Write Descriptive Commit Messages

\`\`\`
feat: add user authentication middleware

- Implement JWT token validation
- Add rate limiting for auth endpoints
- Include comprehensive error handling

Closes #123
\`\`\`

### 3. Respond Gracefully to Feedback
- Thank reviewers for their time
- Ask questions if feedback isn't clear
- Implement suggestions or explain why you chose differently

## Tools and Automation

Modern code review tools can help streamline the process:
- **GitHub/GitLab**: Built-in review features
- **SonarQube**: Automated code quality checks
- **ESLint/Prettier**: Consistent formatting and style

## Creating a Review Culture

The best code review processes are built on:
- **Psychological safety**: Everyone feels comfortable giving and receiving feedback
- **Shared standards**: Clear guidelines for what good code looks like
- **Continuous improvement**: Regular retrospectives on the review process

## Conclusion

Great code reviews are about more than finding bugs – they're about building better software and stronger teams. When done well, they become a cornerstone of engineering excellence.`,
    author: "Emma Thompson",
    publishDate: "2023-12-28",
    readTime: "7 min read",
    tags: ["Code Review", "Team", "Best Practices", "Software Engineering"],
  },
];

export function getBlogPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) =>
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
  );
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
