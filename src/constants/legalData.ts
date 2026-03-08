export interface Section {
  id: string;
  title: string;
  content: Array<{
    question?: string;
    answer?: string;
    text?: string;
    list?: string[];
  }>;
}

export const legalData = {
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What is this app?",
        answer: "Our platform is a global dating and social discovery application designed to help people connect, chat, and build meaningful relationships. Users can explore profiles, swipe to show interest, and match with others who share similar interests."
      },
      {
        question: "Who can use the app?",
        answer: "You must be 18 years or older to create an account and use our services. By registering, you confirm that you meet this legal age requirement."
      },
      {
        question: "How does the matching system work?",
        answer: "Our matching system allows users to swipe or show interest in other profiles. When two users mutually express interest, a match is created, enabling them to start chatting within the platform."
      },
      {
        question: "How do you prevent fake profiles?",
        answer: "We use a combination of automated fraud detection systems, manual moderation, profile verification processes, and user reporting tools. Accounts found violating policies may be suspended or permanently banned."
      },
      {
        question: "Is my personal information safe?",
        answer: "Yes. We use industry-standard security measures such as encryption, secure servers, and access controls to protect user information."
      },
      {
        question: "Can I report or block someone?",
        answer: "Yes. Users can report or block other users directly from their profile or chat window. Our moderation team reviews all reports carefully."
      },
      {
        question: "Is the app free?",
        answer: "Basic features are available for free. Some advanced features may require a premium subscription or in-app purchase."
      },
      {
        question: "Can I delete my account?",
        answer: "Yes. You can delete your account anytime through the settings section. Once deleted, your data will be removed according to our privacy policy."
      },
      {
        question: "Is the app available worldwide?",
        answer: "Yes, the platform is available globally, although certain features may vary depending on local laws and regulations."
      },
      {
        question: "How can I contact support?",
        answer: "You can contact our support team via the Help Center or official support email listed on our website or app."
      }
    ]
  },
  community: {
    title: "Community Guidelines",
    description: "To maintain a respectful and safe environment, all users must follow these guidelines.",
    sections: [
      {
        title: "Respect Others",
        text: "Treat all users with respect. Harassment, bullying, hate speech, or discrimination will not be tolerated."
      },
      {
        title: "Authentic Profiles",
        text: "Users must create profiles that accurately represent themselves. Fake profiles, impersonation, or misleading information are strictly prohibited."
      },
      {
        title: "No Illegal Activities",
        text: "Users may not use the platform for illegal activities including scams, fraud, or solicitation."
      },
      {
        title: "Appropriate Content",
        text: "Profiles, photos, and messages must not contain:",
        list: [
          "Nudity or explicit sexual content",
          "Violence or threats",
          "Offensive or hateful language"
        ]
      },
      {
        title: "Report Violations",
        text: "Users are encouraged to report suspicious or abusive behavior to help maintain a safe community."
      }
    ]
  },
  safety: {
    title: "Safety Policy",
    description: "User safety is our top priority.",
    sections: [
      {
        title: "Online Safety",
        text: "Users should avoid sharing sensitive information such as:",
        list: [
          "Home address",
          "Financial details",
          "Passwords",
          "Government identification numbers"
        ]
      },
      {
        title: "Meeting in Person",
        text: "If you choose to meet someone offline:",
        list: [
          "Meet in a public place",
          "Inform a trusted friend or family member",
          "Arrange your own transportation"
        ]
      },
      {
        title: "Suspicious Behavior",
        text: "Immediately report users who:",
        list: [
          "Ask for money",
          "Attempt scams",
          "Use threatening or abusive language"
        ]
      }
    ]
  },
  privacy: {
    title: "Privacy Policy",
    sections: [
      {
        title: "Introduction",
        text: "This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our platform."
      },
      {
        title: "Information We Collect",
        subsections: [
          {
            title: "Account Information",
            list: ["Name", "Email address", "Date of birth", "Gender and preferences"]
          },
          {
            title: "Profile Information",
            list: ["Photos", "Bio", "Interests"]
          },
          {
            title: "Technical Data",
            list: ["Device information", "IP address", "App usage data"]
          }
        ]
      },
      {
        title: "How We Use Your Information",
        text: "Your information may be used to:",
        list: [
          "Provide matchmaking services",
          "Improve app performance",
          "Detect fraud and abuse",
          "Provide customer support"
        ]
      },
      {
        title: "Data Sharing",
        text: "We do not sell personal data. Information may be shared with:",
        list: [
          "Trusted service providers",
          "Legal authorities when required by law",
          "Fraud prevention partners"
        ]
      },
      {
        title: "Data Security",
        text: "We use encryption, secure servers, and monitoring systems to protect user data."
      },
      {
        title: "Data Retention",
        text: "Your data will be stored only as long as necessary to provide services or comply with legal obligations."
      },
      {
        title: "Your Rights",
        text: "Depending on your location, you may have rights such as:",
        list: [
          "Access your personal data",
          "Request correction",
          "Request deletion",
          "Withdraw consent"
        ]
      }
    ]
  },
  terms: {
    title: "Terms & Conditions",
    sections: [
      {
        title: "Acceptance of Terms",
        text: "By creating an account or using the platform, you agree to comply with these Terms and Conditions."
      },
      {
        title: "Eligibility",
        text: "Users must be at least 18 years old."
      },
      {
        title: "User Responsibilities",
        text: "Users agree not to:",
        list: [
          "Create fake accounts",
          "Harass or threaten other users",
          "Share illegal or explicit content",
          "Conduct scams or fraudulent activities"
        ]
      },
      {
        title: "User Content",
        text: "Users are responsible for content they upload including photos, messages, and profile information."
      },
      {
        title: "Account Termination",
        text: "We reserve the right to suspend or terminate accounts that violate our policies."
      },
      {
        title: "Limitation of Liability",
        text: "The platform is provided “as is”. We are not responsible for user interactions or outcomes of relationships formed through the service."
      },
      {
        title: "Changes to Terms",
        text: "We may update these terms periodically. Continued use of the platform indicates acceptance of the revised terms."
      }
    ]
  },
  cookies: {
    title: "Cookie Policy",
    text: "Our website and app use cookies to improve user experience.",
    list: [
      "Remember user preferences",
      "Analyze website traffic",
      "Improve platform performance"
    ],
    footer: "Users may disable cookies through browser settings, though some features may not function properly."
  },
  refund: {
    title: "Refund Policy",
    text: "Premium subscriptions may be eligible for refunds under certain conditions depending on the payment provider. Refund requests must be submitted within the timeframe specified by the app store or payment platform used for purchase."
  },
  antiFake: {
    title: "Anti-Fake Profile Policy",
    description: "We are committed to maintaining an authentic community.",
    sections: [
      {
        title: "Measures we use",
        list: [
          "AI-based fake profile detection",
          "Manual moderation",
          "User reporting tools",
          "Verification options"
        ],
        footer: "Accounts found violating authenticity policies will be restricted or permanently banned."
      }
    ]
  },
  contact: {
    title: "Contact Information",
    description: "For inquiries related to support, privacy, or legal matters, contact:",
    info: {
      support: "support@meandyou.com",
      privacy: "privacy@meandyou.com",
      legal: "legal@meandyou.com"
    }
  }
};
