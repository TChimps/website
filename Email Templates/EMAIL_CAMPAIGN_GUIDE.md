# Tech Chimps Email Campaign Guide

## Overview
This package includes 6 professional HTML email templates designed to help Tech Chimps acquire new clients through cold outreach, follow-ups, and referrals.

## Template Sequence & Usage

### 📧 Email 1: Initial Outreach
**File:** `email-template-1-initial-outreach.html`
**Subject Line Ideas:**
- "Quick question about [Company Name]'s billing process"
- "Is billing admin slowing down [Company Name]?"
- "[First Name], spending 5+ hours/week on invoicing?"

**When to Use:** First contact with a cold prospect
**Key Points:**
- Opens with a relatable pain point (billing admin)
- Quantifies the problem (5-10 hours/week)
- Clear value proposition
- Low-pressure CTA (free consultation)

**Personalization Required:**
- [First Name]
- [Company Name]

---

### 📧 Email 2: Follow-Up (4-5 days later)
**File:** `email-template-2-follow-up.html`
**Subject Line Ideas:**
- "Quick question, [First Name]"
- "RE: [Company Name] operations"
- "One question about your workweek"

**When to Use:** Prospect didn't respond to Email 1
**Key Points:**
- Shorter, more conversational
- Uses a question to re-engage
- Visual boxes showing different service areas
- Acknowledges they're busy (low pressure)

**Personalization Required:**
- [First Name]
- [Company Name]

---

### 📧 Email 3: Value/Case Study (7-8 days after Email 1)
**File:** `email-template-3-case-study.html`
**Subject Line Ideas:**
- "How a Toronto firm recovered 20+ hours/week"
- "Case study: [Industry] billing transformation"
- "[First Name], thought you'd find this interesting"

**When to Use:** After Email 2, or as a standalone value email
**Key Points:**
- Leads with value, not a pitch
- Concrete results and metrics
- Shows what's possible without being pushy
- Works well for warm leads who are "thinking about it"

**Personalization Required:**
- [First Name]
- [Company Name]

**Optional Customization:**
- Adjust the case study numbers to match real client results
- Change the industry (real estate) to match the prospect's industry

---

### 📧 Email 4: Pricing Overview
**File:** `email-template-4-pricing.html`
**Subject Line Ideas:**
- "Pricing for [Company Name]"
- "Here's what it would cost"
- "Transparent pricing (as requested)"

**When to Use:** 
- Prospect asked about pricing
- Warm lead who's engaged but hasn't booked
- Can be inserted anywhere in sequence when pricing comes up

**Key Points:**
- Shows all three packages side-by-side
- Highlights "Growth" as most popular
- Transparent about what's included
- Removes price objections upfront

**Personalization Required:**
- [First Name]
- [Company Name]

---

### 📧 Email 5: Final Breakup Email (14-16 days after Email 1)
**File:** `email-template-5-breakup.html`
**Subject Line Ideas:**
- "Should I close your file, [First Name]?"
- "Last email from me"
- "Closing your file (unless...)"

**When to Use:** Final attempt after no response to previous emails
**Key Points:**
- Permission-based close ("should I stop emailing?")
- One-sentence value prop recap
- Gives them an easy out
- Often gets the highest response rate

**Personalization Required:**
- [First Name]
- [Company Name]

---

### 📧 Email 6: Referral Request
**File:** `email-template-6-referral.html`
**Subject Line Ideas:**
- "Quick favor, [First Name]?"
- "Know anyone who needs this?"
- "Can you help me out with an intro?"

**When to Use:**
- Existing contacts who aren't buyers themselves
- Happy clients (after successful engagement)
- Network connections who know your ideal customer

**Key Points:**
- Makes it easy to forward
- Includes a pre-written blurb they can use
- Also offers to help them if needed

**Personalization Required:**
- [First Name]
- [Company Name]

---

## Recommended Email Sequences

### Sequence A: Cold Outreach (Standard)
1. Day 0: Email 1 (Initial Outreach)
2. Day 4: Email 2 (Follow-Up)
3. Day 8: Email 3 (Case Study)
4. Day 14: Email 5 (Breakup)

### Sequence B: Cold Outreach (With Pricing)
1. Day 0: Email 1 (Initial Outreach)
2. Day 4: Email 2 (Follow-Up)
3. Day 8: Email 4 (Pricing)
4. Day 14: Email 5 (Breakup)

### Sequence C: Warm Lead (Previously Engaged)
1. Day 0: Email 3 (Case Study)
2. Day 5: Email 4 (Pricing)
3. Day 10: Email 2 (Follow-Up Question)

### Sequence D: Referral Campaign
1. Send Email 6 to your network
2. Follow up 1 week later with anyone who didn't respond

---

## Personalization Tips

### Required Personalizations
Every email needs:
- **[First Name]** - Use the prospect's first name
- **[Company Name]** - Use their company name

### Recommended Personalizations
To increase response rates:
- Reference something specific about their business
- Mention a recent company milestone or news
- Adjust the pain point to their industry
- Include a mutual connection if applicable

### Example:
Instead of: "I noticed [Company Name] has been growing quickly"
Better: "I saw [Company Name] just opened a second location in Mississauga — congrats!"

---

## Testing Subject Lines

### A/B Test These Variables:
1. **Curiosity vs. Direct**
   - Curiosity: "Quick question, [First Name]"
   - Direct: "Help with [Company Name]'s billing process"

2. **Personal vs. Company**
   - Personal: "[First Name], spending 5+ hours on invoicing?"
   - Company: "Is [Company Name] ready to delegate operations?"

3. **With/Without Numbers**
   - With: "Recover 10+ hours per week"
   - Without: "Free up your week with better operations"

### Best Performing Subject Lines (Update Based on Your Results)
- "Quick question, [First Name]" (Follow-up)
- "Should I close your file?" (Breakup)
- "[Company Name] + Tech Chimps" (Simple, professional)

---

## Technical Setup Notes

### Before Sending:
1. **Replace placeholder logo:** All templates use `https://via.placeholder.com/160x80/4361ee/ffffff?text=Tech+Chimps`
   - Replace with actual hosted logo URL: `https://yourdomain.com/path/to/LogoNew.png`

2. **Update all links:**
   - Calendly link is correct: `https://calendly.com/info-techchimps/30min`
   - Website links should point to your actual domain
   - Add tracking parameters if using email analytics: `?utm_source=email&utm_campaign=cold_outreach`

3. **Add unsubscribe functionality:**
   - Replace `<a href="#">Unsubscribe</a>` with actual unsubscribe link
   - Required by CAN-SPAM and CASL laws

4. **Test in multiple email clients:**
   - Gmail (web and mobile)
   - Outlook (desktop and web)
   - Apple Mail (macOS and iOS)
   - Use tools like Litmus or Email on Acid

### Email Service Provider Setup:
These templates work with:
- Mailchimp
- SendGrid
- HubSpot
- ActiveCampaign
- Or any ESP that accepts custom HTML

---

## Compliance & Best Practices

### CAN-SPAM & CASL Compliance:
✅ Physical address in footer (add your Toronto address)
✅ Clear unsubscribe link
✅ Honest subject lines
✅ Company identification
✅ For CASL (Canada): Get consent before sending, or qualify under implied consent

### Sending Best Practices:
- **Don't blast everyone at once** - Warm up your domain
- **Start with 20-50 emails/day** - Gradually increase
- **Personalize at scale** - Use merge tags, but make it feel human
- **Track engagement** - Open rates, clicks, replies
- **Clean your list regularly** - Remove bounces and non-responders

### Response Rate Benchmarks:
- Cold email open rate: 15-25%
- Cold email response rate: 1-5%
- Breakup email response rate: 5-10% (often highest!)
- Warm lead response rate: 10-30%

---

## Plain Text Versions

For best deliverability, always send a plain text version alongside HTML. Here's a template:

```
Hi [First Name],

I noticed [Company Name] has been growing — congrats!

Quick question: Are you spending 5-10 hours per week on billing admin, invoicing, and chasing payments?

Most Toronto businesses we work with don't realize they can delegate this entirely — and get those hours back to focus on growth.

We help by taking over:
• Invoicing and accounts receivable
• Payment follow-up
• Tech support
• Admin tasks

Result? 10+ hours back in your week, starting from $500/month.

Book a free 30-minute call and we'll map out what this could look like for [Company Name]:
https://calendly.com/info-techchimps/30min

No pitch, no obligation — just a conversation.

Best,
Tech Chimps Team
info.techchimps@gmail.com
Toronto, ON
```

---

## Tracking & Optimization

### Metrics to Track:
- **Open Rate** - Are subject lines working?
- **Click Rate** - Is the CTA compelling?
- **Reply Rate** - Is the message resonating?
- **Unsubscribe Rate** - Are you being too aggressive?
- **Meetings Booked** - Ultimate success metric

### Monthly Review:
1. Which emails get the most replies?
2. Which subject lines get opened?
3. What time of day performs best?
4. Which industries respond best?
5. What objections come up most often?

---

## Next Steps

1. ✅ Customize all templates with your branding
2. ✅ Set up email service provider
3. ✅ Build your prospect list (ideal: 100-200 to start)
4. ✅ Personalize first batch (20-50 prospects)
5. ✅ Send Email 1 to first batch
6. ✅ Track results and adjust
7. ✅ Scale up based on response rates

---

**Questions?** Email info.techchimps@gmail.com

Good luck with your campaigns! 🚀
