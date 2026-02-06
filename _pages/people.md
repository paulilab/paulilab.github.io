---
layout: default
title: People
permalink: /people/
splash: /assets/img/splash/paulilab2018_v3_feet.jpg
picture: /assets/img/splash/paulilab2018_v3_feet.jpg
#description: "{{ page.content | liquify | strip_html | truncatewords: 15 }}"
---

<style>
.former-list {list-style:none; padding-left:0; margin:0 0 1.5rem 0;}
.former-item {display:flex; align-items:flex-start; margin:0 0 0.75rem 0;}
.former-thumb {width:90px; height:auto; margin-right:0.75rem; border-radius:6px;}
.former-meta {font-size:0.95rem; line-height:1.4;}
.former-dates {color:#666;}
.section-block {margin-top:1.5rem;}
</style>

{%- assign current_peeps = '' | split:'' -%}
{%- assign former_peeps  = '' | split:'' -%}
{%- for peep in site.people -%}
  {%- if peep.published != false -%}
    {%- if peep.status -%}
      {%- assign status = peep.status -%}
    {%- elsif peep.member_till == 'now' -%}
      {%- assign status = 'current' -%}
    {%- else -%}
      {%- assign status = 'former' -%}
    {%- endif -%}
    {%- if status == 'current' -%}
      {%- assign current_peeps = current_peeps | push: peep -%}
    {%- else -%}
      {%- assign former_peeps = former_peeps | push: peep -%}
    {%- endif -%}
  {%- endif -%}
{%- endfor -%}

{%- assign current_peeps = current_peeps | sort: 'last_name' -%}
{%- assign former_peeps  = former_peeps  | sort: 'last_name' -%}

{%- assign pi_peeps = '' | split:'' -%}
{%- assign intern_peeps = '' | split:'' -%}
{%- assign mascot_peeps = '' | split:'' -%}
{%- assign other_peeps = '' | split:'' -%}

{%- for peep in current_peeps -%}
  {%- assign pos_norm = peep.position | default: '' | downcase | strip -%}
  {%- assign cat_effective = peep.category | default: '' | downcase | strip -%}
  {%- if cat_effective == '' -%}
    {%- case pos_norm -%}
    {%- when 'principal investigator', 'pi' -%}
      {%- assign cat_effective = 'pi' -%}
    {%- when 'postdoc', 'postdoctoral fellow', 'postdoctoral researcher' -%}
      {%- assign cat_effective = 'postdoc' -%}
    {%- when 'phd student', 'phd', 'doctoral student', 'doctoral researcher' -%}
      {%- assign cat_effective = 'phd' -%}
    {%- when 'research assistant', 'lab manager', 'labmanager', 'technician', 'lab technician' -%}
      {%- assign cat_effective = 'research_assistant' -%}
    {%- when 'master student', 'masters student', 'msc student' -%}
      {%- assign cat_effective = 'master' -%}
    {%- when 'vbc summer student', 'summer student', 'summer intern' -%}
      {%- assign cat_effective = 'summer' -%}
    {%- when 'intern' -%}
      {%- assign cat_effective = 'intern' -%}
    {%- endcase -%}
  {%- endif -%}

  {%- if pos_norm contains 'mascot' -%}
    {%- assign mascot_peeps = mascot_peeps | push: peep -%}
  {%- elsif cat_effective == 'pi' -%}
    {%- assign pi_peeps = pi_peeps | push: peep -%}
  {%- elsif cat_effective == 'intern' or cat_effective == 'summer' -%}
    {%- assign intern_peeps = intern_peeps | push: peep -%}
  {%- else -%}
    {%- assign other_peeps = other_peeps | push: peep -%}
  {%- endif -%}
{%- endfor -%}

{%- assign other_peeps = other_peeps | shuffle -%}
{%- assign current_display = pi_peeps | concat: other_peeps -%}

{%- comment -%}
  Category slugs expected in people files (status: current/former):
  - pi, postdoc, phd, research_assistant, master, summer, intern
{%- endcomment -%}

<div class="section-block">
  <h3>Current lab members</h3>
  <div class="peep-container">
    {%- for peep in current_display -%}
      {%- include peep former=false -%}
    {%- endfor -%}
  </div>
</div>

{%- if mascot_peeps.size > 0 -%}
<div class="section-block">
  <h3>Mascot</h3>
  <div class="peep-container">
    {%- for peep in mascot_peeps -%}
      {%- include peep former=false -%}
    {%- endfor -%}
  </div>
</div>
{%- endif -%}

{%- if intern_peeps.size > 0 -%}
<div class="section-block">
  <h3>Interns</h3>
  <div class="peep-container">
    {%- for peep in intern_peeps -%}
      {%- include peep former=false -%}
    {%- endfor -%}
  </div>
</div>
{%- endif -%}

<div class="section-block">
  <details>
    <summary><strong>Former members</strong></summary>

    {%- comment -%}
      Sort by exit date (member_till) in descending order, then by role priority.
      member_till is treated as a date string; sort_natural handles month names reasonably.
    {%- endcomment -%}
    {%- assign former_desc = former_peeps | sort_natural: 'member_till' | reverse -%}
    {%- assign order = 'postdoc|phd|master|research_assistant|summer|intern|pi|other' | split: '|' -%}

    <ul class="former-list">
    {%- for cat_slug in order -%}
      {%- for peep in former_desc -%}
        {%- assign pos_norm = peep.position | default: '' | downcase | strip -%}
        {%- assign cat_effective = peep.category | default: '' | downcase | strip -%}
        {%- if cat_effective == '' -%}
          {%- case pos_norm -%}
          {%- when 'postdoc', 'postdoctoral fellow', 'postdoctoral researcher' -%}
            {%- assign cat_effective = 'postdoc' -%}
          {%- when 'phd student', 'phd', 'doctoral student', 'doctoral researcher' -%}
            {%- assign cat_effective = 'phd' -%}
          {%- when 'research assistant', 'lab manager', 'labmanager', 'technician', 'lab technician' -%}
            {%- assign cat_effective = 'research_assistant' -%}
          {%- when 'master student', 'masters student', 'msc student' -%}
            {%- assign cat_effective = 'master' -%}
          {%- when 'vbc summer student', 'summer student', 'summer intern' -%}
            {%- assign cat_effective = 'summer' -%}
          {%- when 'intern' -%}
            {%- assign cat_effective = 'intern' -%}
          {%- when 'principal investigator', 'pi' -%}
            {%- assign cat_effective = 'pi' -%}
          {%- else -%}
            {%- assign cat_effective = 'other' -%}
          {%- endcase -%}
        {%- endif -%}
        {%- assign cat_effective = cat_effective | default: 'other' -%}
        {%- unless cat_effective == cat_slug -%}{% continue %}{%- endunless -%}

        <li class="former-item">
          {%- if peep.img -%}
            <img class="former-thumb" src="{{ site.baseurl }}{{ peep.img }}" alt="{{ peep.first_name }} {{ peep.last_name }}">
          {%- endif -%}
          <div class="former-meta">
            <strong>{{ peep.first_name }} {{ peep.last_name }}</strong> ({{ peep.position }})<br>
            <span class="former-dates">{{ peep.member_from }} &ndash; {{ peep.member_till }}</span>
            {%- if peep.project -%}<br><span class="former-project"><strong>Project:</strong> {{ peep.project }}</span>{%- endif -%}
            {%- if peep.projects -%}<br><span class="former-project"><strong>Projects:</strong> {{ peep.projects | join: ', ' }}</span>{%- endif -%}

            {%- assign cp = peep.current_position | default: '' -%}
            {%- if cp contains '://' or cp contains 'www.' -%}
              <br><span class="former-current"><strong>Current position:</strong>
                <a href="{{ cp }}" target="_blank" rel="noopener">{{ cp }}</a>
              </span>
            {%- endif -%}
          </div>
        </li>
      {%- endfor -%}
    {%- endfor -%}
    </ul>
  </details>
</div>
