---
id: introduction
title: Introduction
sidebar_label: Introduction
---

ManTorch is a library for Optimization on Manifolds or Constrained Optimization built on top of PyTorch. It allows for putting restrictions on vectors, matrices, or general tensors.

Although the term manifold is a bit intimidating, the applications in which one inadvertently finds them are not.  Examples of these are a matrix being orthogonal, invertible, or symmetric positive definite. One could also consider having an embedding to be living in the hyperbolic space or the sphere, or decompose a matrix into its SVD and optimize the SVD components separately, giving direct access to the singular values of the layer. Each of these examples has at least one manifold lurking behind, and it can be implemented in ManTorch in no more than two lines of code.

For example, consider $M$ $M = \operatorname{SO}(n)$ and

$$
L = \frac{1}{2} \rho v^2 S C_L
$$

$$
M = N
$$
