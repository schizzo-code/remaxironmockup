import { create } from 'zustand'
import { mockLeads } from '../data/mockLeads'
import { mockProperties } from '../data/mockProperties'
import { mockAgents } from '../data/mockAgents'
import { mockConversations } from '../data/mockConversations'

export const useDataStore = create((set, get) => ({
  // Data
  leads: mockLeads,
  properties: mockProperties,
  agents: mockAgents,
  conversations: mockConversations,

  // Lead actions
  updateLead: (id, updates) => set((state) => ({
    leads: state.leads.map(lead =>
      lead.id === id ? { ...lead, ...updates } : lead
    )
  })),

  addLead: (lead) => set((state) => ({
    leads: [...state.leads, lead]
  })),

  deleteLead: (id) => set((state) => ({
    leads: state.leads.filter(lead => lead.id !== id)
  })),

  // Property actions
  updateProperty: (id, updates) => set((state) => ({
    properties: state.properties.map(prop =>
      prop.id === id ? { ...prop, ...updates } : prop
    )
  })),

  addProperty: (property) => set((state) => ({
    properties: [...state.properties, property]
  })),

  deleteProperty: (id) => set((state) => ({
    properties: state.properties.filter(prop => prop.id !== id)
  })),

  // Agent actions
  updateAgent: (id, updates) => set((state) => ({
    agents: state.agents.map(agent =>
      agent.id === id ? { ...agent, ...updates } : agent
    )
  })),

  // Conversation actions
  addMessage: (conversationId, message) => set((state) => ({
    conversations: state.conversations.map(conv =>
      conv.id === conversationId
        ? { ...conv, messages: [...conv.messages, message] }
        : conv
    )
  })),
}))
