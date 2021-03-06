Sphere
======

.. currentmodule:: geotorch

:math:`\operatorname{Sphere}(n, r)` is the sphere in :math:`\mathbb{R}^n`
with radius :math:`r`:

.. math::

    \operatorname{Sphere}(n,r) = \{x \in \mathbb{R}^n\:\mid\:\lVert x \rVert = r\}

.. warning::

    In mathematics, :math:`\mathbb{S}^n` represents the :math:`n`-dimensional sphere.
    With this notation, :math:`\operatorname{Sphere}(n, 1.) = \mathbb{S}^{n-1}`.

.. autoclass:: Sphere

    .. automethod:: sample
    .. automethod:: in_manifold

.. autoclass:: SphereEmbedded

    .. automethod:: sample
    .. automethod:: in_manifold

.. autofunction:: geotorch.sphere.uniform_init_sphere_
