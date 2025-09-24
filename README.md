# Integral Logistics Dashboard

This repository is a self‑contained prototype to show how Ken Wilber’s **Integral Theory** can inspire a more holistic approach to logistics.

## Overview

Traditional supply chain analytics focus almost exclusively on *external* metrics such as cost per mile, load throughput, and schedule adherence. This leaves blind spots around human well‑being and organizational culture that directly impact performance. Pre‑AI dashboards and rule‑based BI tools cannot parse free‑text driver journals or synthesize qualitative with quantitative inputs. The consequence is systemic inefficiencies: driver fatigue, unsafe cadence patterns, and vendor misalignment remain invisible, bleeding millions of dollars in detention, idle time, and missed deliveries.

To address these gaps, we built a **five‑agent system**. Four specialist agents align to each quadrant of Integral Theory—Individual Internal (UL), Individual External (UR), Collective Internal (LL), and Collective External (LR)—and a primary **Orchestrator** agent fuses their insights into a unified recommendation for the next 90 days. The specialist RAG agents analyze the user-slected data (which in this prototype lives in the /data folder) to generate insights and recommendations specific to their domain. Then the orchestrator sythesizes these outputs into a beautiful dashboard and a 90-day action plan. 

For this prototype, the user starts in index.html where 2x2 grid shows the 4 quadrants with a brief explanation of the kind of data that would fall into that domain. In each quadrant, the user can use toggle icons to select one of 3 available datasets: one with negative performance, one with positive performance, and one with inconclusive performance. Once each quadrant has a dataset selected, the user can click *Run Integral Analysis* to get the agents started, and when the analysis is complete, a modal opens to show the individual agent summaries (which normally would only run in the background) and the output from the integrally-informed orchestrator: a beautiful dashboard and a 90-day action plan.

### Background

Originally, the idea for the project came from the Hackathon hosted by Musa Capital and Black Tech Street at Gradient on September 22nd, 2025. The focus of the hackathon was to build a multi-agent system in Azure AI Foundry. This was a great opportunity to learn about Azure AI Foundry and to build a multi-agent system. Unfortunately, we didn't have enough time to fully build out a prototype after a few hours of learning the basics of Azure AI Foundry. 

I came home the next day determined to re-build what we started at the hackathon from scratch. But using the AI Foundry was cost-prohibitive, and navigating the UI continued to be a challenge for me. So I decided to pivot and use the OpenAI API instead since I'm more familiar with it. This is a small proof of concept that, with some iteration, can become a full-fledged, valuable tool for logistics companies specifically and for all companies that want to tackle their systemic blind spots with AI.

### Quadrant Agents

| Agent | Dataset | Responsibilities |
|------|---------|------------------|
| **UL** | Daily driver logs (hours of sleep, free‑text sleep quality, start/end moods) | Computes average sleep duration, sentiment of subjective sleep quality, and tracks mood changes. |
| **UR** | Daily operational logs (hours on road, hours on break, loads delivered, minutes ahead/behind schedule) | Aggregates on‑road vs. break time, delivery throughput, and schedule adherence to identify productivity and safety signals. |
| **LL** | Weekly driver‑submitted evaluations (vendor treatment, DBJ culture, appreciation rating) | Performs sentiment analysis on narrative feedback, averages appreciation scores, and flags low‑morale weeks. |
| **LR** | Weekly company performance metrics (revenue, accidents, weigh‑station infractions, on‑road costs) | Summarizes revenue and cost trends, counts accidents and infractions, and highlights risk events. |
| **Orchestrator** | All of the above | Integrates metrics across quadrants and recommends balanced interventions for the next 90 days. |

## Technical Details

1. RAG agents are built with the OpenAI Responses API and the gpt-5-nano model (cheapest and fastest).
2. There is bidirectional communication between the orchestrator and each of the specialist RAG agents, but no communication between the specialist RAG agents. 
3. The prototype UI is clean, elegant, and professional. Background is black, primary color is #26a69a, secondary color is #d81b60.

## Resources

- https://cookbook.openai.com/examples/file_search_responses
