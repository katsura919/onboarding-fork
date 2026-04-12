# Implementation Plan: Peace-Driven Leader™ Onboarding

## Core Objectives
Create guided, calming onboarding journey ("offloading cares"). 
**Stack**: Next.js, shadcn/ui, MongoDB.

## Layout & Architecture
- **Auth Layer**: Login/Signup required to persist progress in MongoDB.
- **Top Navigation**: Persistent Progress Bar (Progress % across all phases).
- **Sidebar**: Left-side menu for Phase navigation (Connection → Activation).
- **Content Area**: Step-by-step forms and content blocks.

## Onboarding Phases

### Phase 0: Initiation
- **Payment Success**: `/success` page. Emotional anchor, "Welcome Home" messaging, celebratory GIF.
- **Action**: "Begin Lightening the Load" button → Redirect to Phase 1.

### Phase 1: Connection (Foundation)
- **1A: Video Landing**: Welcome video component with human touch.
- **1B: SNAP Snapshot**: Manual form (5-7 mins).
- **1C: Leadership Triage**: Manual entry for assessments (Neurodiversity, DiSC, etc.). Embedded Google Doc links for reference.
- **1D: Open Share**: Text area for emotional safety.
- **1E: Booking**: Call scheduler link.

### Phase 2: Awareness (Momentum)
- **360° Evaluation**: Manual text fields for external leadership feedback.
- **Growth Inputs**: Rhythm Qs, B.O.S.S Index, Capacity Pulse checklist (all manual).
- **Evening Check**: Text input field (replaces voice).
- **Tracker**: Gamified checkboxes for commitment.

### Phase 3: Stabilization (Vision)
- **Vision Activation**: Text domain descriptions.
- **Ideal Day**: Written narrative entry.
- **Family Mission**: Values + Mission statement form.

### Phase 4: Activation (Kickoff)
- **Kickoff Portal**: Final instructions, Telegram join-link.

## Technical Tasks
1. **DB Schema**: `User` model with `onboardingProgress` (object tracking phase/step status) and `assessmentData`.
2. **Layout Shell**: Create `app/onboarding/layout.tsx` with Sidebar and Progress API.
3. **Step Components**: Build reusable form components for each assessment.
4. **State Management**: Sync form data to MongoDB on "Continue."

## Verification
- Progress syncing between sessions.
- Sidebar locking (Phase 2 hidden until Phase 1 done).
- Mobile responsiveness for the "Calm" UI.
